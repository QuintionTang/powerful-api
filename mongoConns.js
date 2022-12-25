const mongoose = require("mongoose");

class MongoConns {
    constructor() {
        this.getMainDB = this.getMainDB.bind(this);
        const mongoUrl = "mongodb://127.0.0.1:27018/powerful";
        this.mainDB = mongoose.createConnection(mongoUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        this.mainDB
            .then((db) => {
                console.info("Connected to MongoDB mainDB");
            })
            .catch((err) => {
                console.error("Failed to connect to mainDB", {
                    params: { err: err.message },
                });
            });
    }

    getMainDB() {
        return this.mainDB;
    }
}

let mongoConns = null;
module.exports = () => {
    if (mongoConns) return mongoConns;
    else {
        mongoConns = new MongoConns();
        return mongoConns;
    }
};
