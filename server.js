const hapi = require("hapi");
const mongoose = require("mongoose");
const Painting = require("./models/Painting");

const server = hapi.server({
    port: 3006,
    host: "localhost",
});
const API_ENDPOINT = "/api/v1";
const init = async () => {
    server.route([
        {
            method: "GET",
            path: "/",
            handler: (request, response) => `<h1>This is powerful api.</h1>`,
        },
        {
            method: "GET",
            path: `${API_ENDPOINT}/paintings`,
            handler: (request, response) => {
                return Painting.find();
            },
        },
        {
            method: "POST",
            path: `${API_ENDPOINT}/paintings`,
            handler: (request, response) => {
                const { name, url, techniques } = request.payload;
                const painting = new Painting({
                    name,
                    url,
                    techniques,
                });
                return painting.save();
            },
        },
    ]);

    await server.start();
    console.log(`Server running at:${server.info.uri}`);
};

init();
