const hapi = require("hapi");

const server = hapi.server({
    port: 3006,
    host: "localhost",
});

const init = async () => {
    await server.start();
    console.log(`Server running at:${server.info.uri}`);
};

init();
