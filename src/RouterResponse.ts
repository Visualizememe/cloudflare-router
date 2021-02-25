import { RouterRequest } from "./RouterRequest";
import cookie, { CookieSerializeOptions } from "cookie";
import { Route } from "./Router";


export declare type BodyType =
    string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;

export type BuiltResponse<AdditionalDataType> = {
    response: unknown;
    routerResponse: RouterResponse<AdditionalDataType>;
    routerRequest: RouterRequest<AdditionalDataType>;
    tasks: Promise<unknown>[];
};

export class RouterResponse<AdditionalDataType extends any> {
    /**
     * The route that initiated by the request
     * @type {Route<AdditionalDataType>}
     */
    public route?: Route<AdditionalDataType>;
    /**
     * The processed request
     * @type {RouterRequest<AdditionalDataType>}
     */
    public request: RouterRequest<AdditionalDataType>;
    /**
     * Internal data for the RouterResponse, to retrieve as normal data call .buildResponse()
     * @type {{type: "normal" | "redirect", status: string, statusCode: number, headers: Record<string, string>, cookies: Record<string, string>, tasks: Promise<unknown>[], contentType: string, body: BodyType, redirect?: {url: string}, response?: Response}}
     */
    public response: {
        type: "normal" | "redirect";
        status: string;
        statusCode: number;
        headers: Record<string, string>;
        cookies: Record<string, string>;
        tasks: Promise<unknown>[];
        contentType: string;
        body: BodyType;
        /**
         * If we want to redirect
         */
        redirect?: {
            url: string;
        };
        /**
         * If the user wants to provide custom response
         */
        response?: Response;
    };

    constructor (request: RouterRequest<AdditionalDataType>) {
        this.request = request;
        this.response = {
            type: "normal",
            status: "OK",
            statusCode: 200,
            headers: {},
            cookies: {},
            tasks: [],
            contentType: "text/plain",
            body: null
        };
    }

    public setRoute (route: Route<AdditionalDataType>): void {
        this.route = route;
    }

    public json (data: unknown): this {
        this.response.body = JSON.stringify(data);
        this.response.contentType = "application/json";

        return this;
    }

    public raw (body: BodyType, contentType: string): this {
        this.response.body = body;
        this.response.contentType = contentType;

        return this;
    }

    public text (text: string): this {
        this.response.body = text;
        this.response.contentType = "text/plain";

        return this;
    }

    public status (status: string): this {
        this.response.status = status;

        return this;
    }

    public statusCode (statusCode: number): this {
        this.response.statusCode = statusCode;

        return this;
    }

    public addTasks (tasks: Promise<unknown> | Promise<unknown>[]): this {
        tasks = Array.isArray(tasks) ? tasks : [tasks];
        this.response.tasks = [...this.response.tasks, ...tasks];

        return this;
    }

    public setHeader (name: string, value: string): this {
        // Suppressing since this is not supposed to be user-input related
        // eslint-disable-next-line security/detect-object-injection
        this.response.headers[name] = value;

        return this;
    }

    public setCookie (name: string, value: string, options?: CookieSerializeOptions): this {
        // Suppressing since this is not supposed to be user-input related
        // eslint-disable-next-line security/detect-object-injection
        this.response.cookies[name] = cookie.serialize(
            name,
            value,
            options
        );

        return this;
    }

    public redirect (url: string, statusCode: number): this {
        this.response.type = "redirect";
        this.response.statusCode = statusCode;
        this.response.redirect = {
            url
        };

        return this;
    }

    public setCustomResponse (response: Response): this {
        this.response.response = response;

        return this;
    }

    transformOptions (): Record<string, unknown> {
        return {
            status: this.response.statusCode,
            statusText: this.response.status,
            headers: new Headers(this.response.headers)
        };
    }

    buildResponse (): BuiltResponse<AdditionalDataType> {
        // Append all cookies into one string and set it as set-cookie header
        (() => {
            const cookies = this.response.cookies;
            let totalCookiesString = "";

            Object.keys(cookies)
                .forEach(cookieName => {
                    // Nothing user-input related
                    // eslint-disable-next-line security/detect-object-injection
                    const cookieValue = cookies[cookieName];
                    totalCookiesString += `${cookieValue}`;
                });

            // If the header already exists, we just want to append to it
            this.response.headers["set-cookie"] = `${totalCookiesString};${this.response.headers["set-cookie"] || ""}`;
        })();
        // Set the content-type header if it does not exist
        this.response.headers["content-type"] = this.response.headers["content-type"] || this.response.contentType;


        // Move on to transforming the data to response
        if (this.route && this.route.router.main && this.route.router.main.customResponseTransformer) {
            // They want to build their own response, that's fine!
            return {
                tasks: this.response.tasks,
                response: this.route.router.main.customResponseTransformer(this.response),
                routerResponse: this,
                routerRequest: this.request
            };
        }

        return {
            tasks: this.response.tasks,
            response: new Response(
                this.response.body,
                this.transformOptions()
            ),
            routerResponse: this,
            routerRequest: this.request
        };
    }
}
