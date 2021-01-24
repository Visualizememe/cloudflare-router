import UrlPattern from "url-pattern";
import { IncomingRequest } from "./interfaces";
import RouterRequest from "./RouterRequest";
import RouterResponse, { BuiltResponse } from "./RouterResponse";


const NO_APPEND_SLASH_IF_CHARACTERS = [
    "*",
    ")",
    "?"
];

/*
    Notes:
    ---
    Middlewares are for processing the request internally before the final non-middleware route handles the request.
    If the handler is a Router, the route is basically passing the request on to that router

    -

    When wanting to find all matching routes, go through each linked Router (if any) and recursively look for their routes
    etc. Then add all the matching routes to a temporary array.
 */

/**
 * Methods that can be used for the Route, use "ANY" for any methods
 * Default is "GET"
 */
export type Methods = "ANY" | "GET" | "POST" | "PUT" | "PATCH" | "OPTIONS" | "HEAD" | "DELETE";


/**
 * Options for creating a new Route
 */
export interface RouteOptions<AdditionalDataType extends unknown> {
    /**
     * The path that this Route will be "listening" for, raw
     */
    path: string;
    /**
     * The function that will be called if the incoming request matches the Route's criteria
     */
    handler: RouteHandler<AdditionalDataType>;
    /**
     * The specified method that this Route will be "accepting"
     * Use "ANY" if it's any method, default is "GET"
     */
    method?: Methods;
    /**
     * Whether this route is a middleware or not
     * NOTE: If the provided handler is instance of Router, this value will be ignored
     */
    isMiddleware?: boolean;
}


/**
 * The function that will be called if the incoming request matches a route's criteria
 */
export type RouteFunctionHandler<AdditionalDataType> = (request: RouterRequest<AdditionalDataType>, response: RouterResponse<AdditionalDataType>, additionalData?: AdditionalDataType) => void;


/**
 * The handler that will be used if the request matches the route's criteria
 */
export type RouteHandler<AdditionalDataType extends unknown> =
    Router<AdditionalDataType>
    | RouteFunctionHandler<AdditionalDataType>;


export class Route<AdditionalDataType extends unknown> {
    /**
     * The router that created this route
     * @type {Router}
     */

    public router: Router<AdditionalDataType>;
    /**
     * The method this route accepts
     * @type {RouteOptions["method"]}
     */
    public method: Methods;
    public path: {
        /**
         * The URL pattern used for matching incoming requests
         */
        pattern: UrlPattern;
        /**
         * The path the library has parsed and formatted / fixed accordingly
         */
        formattedPath: string;
        /**
         * The path provided to the library
         */
        inputPath: string;
    };
    /**
     * The function that will be called if the incoming request matches the criteria for this route
     * @type {RouteHandler}
     */
    public handler: RouteHandler<AdditionalDataType>;
    /**
     * If the route provided is a middleware or not, this will affect how the incoming request will be processed
     * by this route.
     * @type {boolean}
     */
    public isMiddleware: boolean;
    /**
     * If the handler is a Router
     */
    public isRouterHandler: boolean;

    /**
     * Creates a new Route
     * @param {Router} router
     * @param {RouteOptions} options
     */
    constructor (router: Router<AdditionalDataType>, options: RouteOptions<AdditionalDataType>) {
        this.router = router;
        this.method = options.method || "GET";

        const fixedPath = this.router.fixPath(options.path);
        const pathPattern = this.router.createUrlPattern(fixedPath);
        this.path = {
            inputPath: options.path,
            formattedPath: fixedPath,
            pattern: pathPattern
        };
        this.handler = options.handler;
        // Design choice: If handler is Router, set to false, otherwise check the options. Default is false
        this.isMiddleware = options.handler instanceof Router ? false : !!options.isMiddleware;
        // Design choice: If handler is Router, set to true (otherwise false)
        this.isRouterHandler = options.handler instanceof Router;
    }

    public matchPath (request: RouterRequest<AdditionalDataType>): null | unknown {
        return this.path.pattern.match(request.path);
    }

    public match (request: RouterRequest<AdditionalDataType>): { pathMatch: unknown; doesMatch: boolean } {
        const pathMatches = this.matchPath(request);
        const methodMatches = this.method === "ANY" ? true : (this.method.toUpperCase() === request.method.toUpperCase());

        return {
            pathMatch: pathMatches,
            doesMatch: !!pathMatches && methodMatches
        };
    }
}


interface RouterOptions<AdditionalDataType extends any> {
    /**
     * Used internally when using multiple routers for organizational purposes. For example router.use("/api", apiRouter)
     * Then the basePath will be used to let the apiRouter start with /api.
     */
    basePath?: string;
    /**
     * If true, cloudflare-router will wait for each middleware to finish before moving on to the next one, using await
     * Otherwise, it will process the middlewares in no specified order using Promise.all
     * Default: true
     */
    waterfallMiddleware?: boolean;
    /**
     * If you want custom logic to return a response object
     * This is useful if you want to implement testing
     */
    customResponseTransformer?: (data: RouterResponse<AdditionalDataType>["response"]) => unknown;
    /**
     * (Internal use): The parent router
     */
    parent?: Router<AdditionalDataType>;
}


type MatchingRoute<AdditionalDataType> = {
    route: Route<AdditionalDataType>;
    match: Exclude<any, "undefined">;
};


class Router<AdditionalDataType extends unknown> {
    public basePath: string;
    public isWaterfall: boolean;
    public routes: Route<AdditionalDataType>[];
    public customResponseTransformer?: RouterOptions<AdditionalDataType>["customResponseTransformer"];
    /**
     * The "parent" of all the routers, which will be processing the incoming requests
     * @type {Router<AdditionalDataType> | null}
     */
    public parent: Router<AdditionalDataType> | null;
    /**
     * The main Router
     * @type {Router<AdditionalDataType>}
     */
    public main: Router<AdditionalDataType>;

    /**
     * Creates a new Router
     * @param {RouterOptions} options
     */
    constructor (options: RouterOptions<AdditionalDataType> = {}) {
        this.isWaterfall = options.waterfallMiddleware || true;
        this.routes = [];
        this.customResponseTransformer = options.customResponseTransformer;
        this.parent = options.parent || null;
        this.main = this.getMainRouter();

        // We need to put this at the end, otherwise we will risk this.routes to not be defined
        this.basePath = this.setBasePath(options.basePath);
    }

    /**
     * Recursively goes up and finds the main router
     * @returns {Router<AdditionalDataType>}
     */
    public getMainRouter (): Router<AdditionalDataType> {
        if (this.parent) {
            return this.parent.getMainRouter();
        } else {
            return this;
        }
    }

    public findMatchingRoutes (request: RouterRequest<AdditionalDataType>): MatchingRoute<AdditionalDataType>[] {
        let foundMatching: MatchingRoute<AdditionalDataType>[] = [];

        for (const route of this.routes) {
            if (route.handler instanceof Router) {
                foundMatching = [...foundMatching, ...route.handler.findMatchingRoutes(request)];
            } else {
                // This is a regular route
                const matchRoute = route.match(request);

                if (matchRoute.doesMatch) {
                    foundMatching.push({
                        match: matchRoute.pathMatch,
                        route
                    });
                }
            }
        }

        return foundMatching;
    }

    public async serve (request: RouterRequest<AdditionalDataType> | IncomingRequest, additionalData?: AdditionalDataType, response?: RouterResponse<AdditionalDataType>): Promise<BuiltResponse<AdditionalDataType>> {
        request = (!(request instanceof RouterRequest) ? new RouterRequest<AdditionalDataType>(request as IncomingRequest, additionalData) : request) as RouterRequest<AdditionalDataType>;
        response = response || new RouterResponse<AdditionalDataType>(request as RouterRequest<AdditionalDataType>);

        const foundMatchingRoutes = this.findMatchingRoutes(request);
        const middlewares = foundMatchingRoutes.filter(matchingRoute => matchingRoute.route.isMiddleware);
        const responseHandler = foundMatchingRoutes.filter(matchingRoute => !matchingRoute.route.isMiddleware)
            .find(matchingRoute => matchingRoute);

        if (!responseHandler) {
            throw new Error(`Could not find a response handler for the request!`);
        }

        // We're doing this to make sure that the params property is available
        request.setParams(responseHandler.match);
        // We're setting the route so that it's accessible from within the RouterResponse instance
        response.setRoute(responseHandler.route);


        if (middlewares.length > 0) {
            const executeMiddleware = async (middleware: Route<AdditionalDataType>): Promise<unknown> => {
                const handler = middleware.handler as RouteFunctionHandler<AdditionalDataType>;

                return handler(request as RouterRequest<AdditionalDataType>, response!, additionalData);
            };

            if (this.isWaterfall) {
                for (const middleware of middlewares) {
                    const waitingPromise = executeMiddleware(middleware.route);

                    // eslint-disable-next-line no-await-in-loop
                    await waitingPromise;
                }
            } else {
                await Promise.all(
                    middlewares.map(middleware => executeMiddleware(middleware.route))
                );
            }
        }

        // Wait for the response handler to finish
        await (responseHandler.route.handler as RouteFunctionHandler<AdditionalDataType>)(request, response, additionalData);

        return response.buildResponse();
    }

    /**
     * Used internally for creating a route with a certain method
     * @param {RouteOptions} options
     * @returns {Route}
     */
    public createRoute (options: RouteOptions<AdditionalDataType>): Route<AdditionalDataType> {
        if (options.method !== "ANY" && options.handler instanceof Router) {
            throw new Error(`Cannot have handler as instance of Router if method is not ANY!`);
        }

        return new Route(
            this,
            {
                ...options
            }
        );
    }

    public createRouteAndAddInternally (options: RouteOptions<AdditionalDataType>): Route<AdditionalDataType> {
        const createdRoute = this.createRoute(options);

        this.routes.push(createdRoute);

        return createdRoute;
    }

    public use (path: string, handler: RouteHandler<AdditionalDataType>): void {
        if (handler instanceof Router) {
            handler.setBasePath(path, true);
            handler.setParentRouter(this);

            this.createRouteAndAddInternally({
                path,
                handler,
                method: "ANY",
                isMiddleware: false
            });
        } else {
            this.createRouteAndAddInternally({
                path,
                handler,
                method: "ANY",
                isMiddleware: true
            });
        }
    }

    public get (path: string, handler: RouteHandler<AdditionalDataType>): void {
        this.createRouteAndAddInternally({
            path,
            handler,
            method: "GET",
            isMiddleware: false
        });
    }

    public post (path: string, handler: RouteHandler<AdditionalDataType>): void {
        this.createRouteAndAddInternally({
            path,
            handler,
            method: "POST",
            isMiddleware: false
        });
    }

    public options (path: string, handler: RouteFunctionHandler<AdditionalDataType>) {
        this.createRouteAndAddInternally({
            path,
            handler,
            method: "OPTIONS",
            isMiddleware: false
        });
    }

    public head (path: string, handler: RouteFunctionHandler<AdditionalDataType>) {
        this.createRouteAndAddInternally({
            path,
            handler,
            method: "HEAD",
            isMiddleware: false
        });
    }

    public delete (path: string, handler: RouteFunctionHandler<AdditionalDataType>) {
        this.createRouteAndAddInternally({
            path,
            handler,
            method: "DELETE",
            isMiddleware: false
        });
    }


    /**
     * Fixing the input path to make sure it's consistent in regards of the slashes (/)
     * @param {string} path
     * @returns {string}
     */
    public fixPath (path: string): string {
        path = `${this.basePath || "/"}${path.startsWith("/") ? path.slice(1) : path}`;

        if (!path.endsWith("/") && !NO_APPEND_SLASH_IF_CHARACTERS.some(char => path.endsWith(char))) {
            path += "/";
        }

        return path;
    }

    /**
     * Creating a URLPattern instance based on the input path (NOTE: MUST HAVE WENT THROUGH Router.fixPath first!)
     * @param {string} path
     * @returns {UrlPattern}
     */
    public createUrlPattern (path: string): UrlPattern {
        return new UrlPattern(path);
    }

    /**
     * Sets the base path for the Router, and updates all the belonging routes with the new base path
     * Returns a string with the new base path
     * @param {string} path
     * @param {boolean | undefined} fixRoutes
     * @returns {string}
     * @private
     */
    private setBasePath (path?: string, fixRoutes?: boolean): string {
        // Since Router.fixPath appends the existing basePath, we don't want it to add the already existing one
        this.basePath = "/";
        this.basePath = this.fixPath(path || "/");

        // We want this to explicitly be true, because otherwise we risk running into an infinite recursive loop
        if (fixRoutes) {
            // New array for the routes that have been updated with the new base path
            const newRoutes: Route<AdditionalDataType>[] = [];

            for (const oldRoute of this.routes) {
                const newRoute = this.createRoute({
                    path: oldRoute.path.inputPath,
                    handler: oldRoute.handler,
                    method: oldRoute.method,
                    isMiddleware: oldRoute.isMiddleware
                });

                newRoutes.push(newRoute);
            }

            this.routes = newRoutes;
        }

        return this.basePath;
    }

    private setParentRouter (parent: Router<AdditionalDataType>) {
        this.parent = parent;
        this.main = this.getMainRouter();
    }
}


export default Router;
