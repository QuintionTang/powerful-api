const graphql = require("graphql");
const PaintingType = require("./PaintingType");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const Painting = require("./../models/Painting");

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        painting: {
            type: PaintingType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // 保存数据逻辑
                return Painting.findById(args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
