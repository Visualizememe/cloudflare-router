export declare type IncomingEvent = {
    type: "fetch";
    request: IncomingRequest;
    passThroughOnException: () => void;
    respondWith: (callback: Promise<unknown> | unknown) => void;
    waitUntil: (tasks: Promise<unknown>) => void;
};

export declare type IncomingRequest = {
    url: string;
    method: string;
    body: ReadableStream;
    bodyUsed: boolean;
    redirect: "follow" | "manual";
    cf: {
        asn: string;
        colo: string;
        weight: unknown;
        exclusive: number;
        group: unknown;
        ["group-weight"]: unknown;
        tlsCipher: string;
        country: string;
        tlsClientAUth: unknown;
        tlsVersion: string;
        cacheEverything: boolean;
        scrapeShield: boolean;
        polish: "lossy" | "lossless" | "off";
        minify: {
            javascript: boolean;
            css: boolean;
            html: boolean;
        };
        mirage: boolean;
        apps: boolean;
        cacheTtl: number;
        resolveOverride: string;
    };
    clone: () => IncomingRequest;
    headers: Headers;
    json: () => Promise<Record<string, unknown> | unknown[]>;
    fetch: () => Promise<Response>;
    blob: () => Promise<Blob | null>;
    formData: () => Promise<FormData | null>;
    text: () => Promise<string | null>;
    arrayBuffer: () => Promise<ArrayBuffer | null>;
};
