const { Router } = require("../dist");

// All the routers to be used in this file for the tests
const entryRouter = new Router({
    customResponseTransformer: (a) => a
});
const apiRouter = require("./apiRouter");

entryRouter.use("/api", apiRouter);


// Setting up routes for testing
const setupRouter = (router) => {
    // For normal / default paths
    router.get("/", (_req, res) => res.text("/"));
    // Making sure that the routing to a certain path works
    router.get("/test", (_req, res) => res.text("/test"));
    // Making sure that longer paths work as well
    router.get("/test/deep/", (req, res) => res.text("/test/deep"));
    // Making sure that parameters work
    router.get("/count/:value", (req, res) => res.text(`/count/${req.params.value}`));
    // Making sure that double parameters work
    router.get("/increase/:userId/:value", (req, res) => res.text(`/increase/${req.params.userId}/${req.params.value}`));
    // Making sure that parameters inside a longer path works
    router.get("/increase/user/:value", (req, res) => res.text(`/increase/user/${req.params.value}`));
};

// Setting up the routers properly and routing /api to apiRouter

setupRouter(entryRouter);
setupRouter(apiRouter);

// Util functions for the tests
const createOptions = (path, otherOptions = {}) => {
    return {
        url: `https://example.com${path}`,
        method: "GET",
        headers: [],
        ...otherOptions
    };
};

describe("testing path functionality", function () {
    const tmpRouter = new Router();
    entryRouter.use("/tmp", tmpRouter);

    // Setting up middleware
    tmpRouter.use("*", (req, res) => {
        req.hasTouched = true;
    });

    tmpRouter.get("/", (req, res) => res.text(req.hasTouched ? "yes" : "no"));
    tmpRouter.get("/yes", (req, res) => res.text(req.hasTouched ? "yes" : "no"));

    it("(1) should have 'yes' in body if hasTouched is a property of request", async function () {
        const res = await entryRouter.serve(createOptions("/tmp/yes"));

        expect(res).toMatchObject({
            response: {
                body: "yes"
            }
        });
    });

    it("(2) should have 'yes' in body if hasTouched is a property of request", async function () {
        const res = await entryRouter.serve(createOptions("/tmp/"));

        expect(res).toMatchObject({
            response: {
                body: "yes"
            }
        });
    });
});
describe("Testing high-level cloudflare-router", function () {
    const request = (path, method = "GET") => entryRouter.serve(createOptions(path, { method }))
        .then(d => ({
            body: d.response.body,
            statusCode: d.response.statusCode
        }));

    it("(1) should return the correct path", async function () {
        const resNormal = await request("/");
        const resAPI = await request("/");

        expect(resNormal.body).toBe("/");
        expect(resAPI.body).toBe("/");
    });

    it("(2) should return the correct path", async function () {
        const resNormal = await request("/test");
        const resAPI = await request("/test");

        expect(resNormal.body).toBe("/test");
        expect(resAPI.body).toBe("/test");
    });

    it("(3) should return the correct path", async function () {
        const resNormal = await request("/test/deep");
        const resAPI = await request("/test/deep");

        expect(resNormal.body).toBe("/test/deep");
        expect(resAPI.body).toBe("/test/deep");
    });

    it("should respond with correct parameter", async function () {
        const resNormal = await request("/count/3");
        const resAPI = await request("/count/4");

        expect(resNormal.body).toBe("/count/3");
        expect(resAPI.body).toBe("/count/4");
    });

    it("should respond with correct double parameter", async function () {
        const resNormal = await request("/increase/1/2");
        const resAPI = await request("/increase/3/4");

        expect(resNormal.body).toBe("/increase/1/2");
        expect(resAPI.body).toBe("/increase/3/4");
    });

    it("should respond with correct parameter in deeper path", async function () {
        const resNormal = await request("/increase/user/1");
        const resAPI = await request("/increase/user/2");

        expect(resNormal.body).toBe("/increase/user/1");
        expect(resAPI.body).toBe("/increase/user/2");
    });
});
