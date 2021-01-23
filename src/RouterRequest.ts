import cookie from "cookie";
import { Methods, Route } from "./Router";
import qs from "querystring";
import { IncomingRequest } from "./interfaces";


export default class RouterRequest<AdditionalDataType extends unknown> {
    public request: IncomingRequest;
    public additionalData: AdditionalDataType | null;
    public url: string;
    public urlData: URL;
    public path: string;
    public query: qs.ParsedUrlQuery;
    public method: Methods;
    public bodyUsed: boolean;
    public headers: Record<string, string>;
    public cookies: Record<string, string>;
    /**
     * The route that was found with the request
     * @type {Route<AdditionalDataType>}
     */
    public route?: Route<AdditionalDataType>;
    /**
     * The body if existent
     * @type {unknown}
     */
    public body?: unknown;
    /**
     * The params for the route, if any
     * NOTE: This will be set by the Router once the fitting route has been found
     * @type {Record<string, string>}
     */
    public params?: Record<string, string>;

    constructor (request: IncomingRequest, additionalData?: AdditionalDataType) {
        this.request = request;
        this.additionalData = additionalData || null;
        this.url = RouterRequest.fixRequestUrl(request.url);
        this.urlData = new URL(this.url);
        this.path = this.urlData.pathname;
        this.query = qs.parse(this.urlData.search.slice(1));
        this.method = (request.method || "GET").toUpperCase() as Methods;
        this.bodyUsed = request.bodyUsed;
        this.body = request.body;
        this.headers = {};
        this.cookies = {};

        this.parseHeaders();
    }

    static fixRequestUrl (url: string): string {
        const endIndex = url.indexOf("?") > -1 ? url.indexOf("?") : url.length;
        const endChar = url.charAt(endIndex - 1);

        return endChar !== "/" ? [url.slice(0, endIndex), "/", url.slice(endIndex)].join("") : url;
    }

    setRoute (route: Route<AdditionalDataType>): void {
        this.route = route;
    }

    setParams (params: Record<string, string>): void {
        this.params = params;
    }

    private parseHeaders () {
        const allHeaders = [...this.request.headers];

        allHeaders.forEach(header => {
            const [name, value] = header;

            this.headers[name.toLowerCase()] = value;
        });

        this.cookies = cookie.parse(this.headers.cookie || "");
    }
}
