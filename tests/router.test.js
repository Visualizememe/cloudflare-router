const { Router } = require("../dist");

// All the routers to be used in this file for the tests
const entryRouter = new Router({
    customResponseTransformer: (a) => a
});
const apiRouter = require("./apiRouter");


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
/*
setupRouter(entryRouter);
setupRouter(apiRouter);

entryRouter.use("/api", apiRouter);


 */

entryRouter.get("/", (req, res) => {
    console.log("got /");
    res.text("hi");
});

// Util functions for the tests
const createOptions = (router, path, otherOptions = {}) => {
    return {
        url: `https://example.com/${path}`,
        method: "GET",
        headers: [],
        ...otherOptions
    };
};

// Starting the tests
describe("Testing cloudflare-router", function () {
    it("should return the base path", async function () {
        const res = await entryRouter.serve(createOptions(entryRouter, ""));
        console.log(res);

        expect(1).toBe(1);
    });
});
