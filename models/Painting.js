const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoConns = require("../mongoConns")();

const PaintingSchema = new Schema({
    name: {
        type: String,
    },
    url: {
        type: String,
    },
    techniques: {
        type: [String],
    },
});

module.exports = mongoConns.getMainDB().model("Painting", PaintingSchema);
