const Hapi = require("hapi");
const Painting = require("./models/Painting");

const { graphiqlHapi, graphqlHapi } = require("apollo-server-hapi");
const schema = require("./graphql/schema");

const server = Hapi.server({
    port: 3006,
    host: "localhost",
});
const API_ENDPOINT = "/api/v1";
const init = async () => {
    await server.register({
        plugin: graphiqlHapi,
        options: {
            path: "/graphiql",
            graphiqlOptions: {
                endpointURL: "/graphql",
            },
            route: {
                cors: true,
            },
        },
    });

    await server.register({
        plugin: graphqlHapi,
        options: {
            path: "/graphql",
            graphqlOptions: {
                schema,
            },
            route: {
                cors: true,
            },
        },
    });
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
