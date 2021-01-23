const { Router } = require("../dist");


const router = new Router({
    customResponseTransformer: (arg) => (arg)
});

router.get("/", (request, response) => {
    console.log("get 1");

    return "2";
});

router.get("/2", (request, response) => {
    console.log("get 2");
});

(async () => {
    const found = await router.serve({
        url: `https://domain.com/`,
        method: "GET",
        headers: [],
    });

    console.log(found);
})();
