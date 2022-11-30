const hapi = require("hapi");
const mongoose = require("mongoose");
const server = hapi.server({
    port: 3006,
    host: "localhost",
});

const mongoUrl = "mongodb://127.0.0.1:27018/powerful";
const mainDB = mongoose
    .createConnection(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .asPromise();

mainDB
    .then((db) => {
        console.info("Connected to MongoDB mainDB");
        db.model("Users", new mongoose.Schema({ name: String }));
    })
    .catch((err) => {
        console.error("Failed to connect to mainDB", {
            params: { err: err.message },
        });
    });

const init = async () => {
    server.route({
        method: "GET",
        path: "/",
        handler: (request, response) => `<h1>This is powerful api.</h1>`,
    });

    await server.start();
    console.log(`Server running at:${server.info.uri}`);
};

init();
