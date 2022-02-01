import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} from 'graphql';


const MerchantType: GraphQLObjectType = new GraphQLObjectType({
    name: 'MerchantProfile',
    description: 'A Merchant Profile',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'id of the merchant Profile',
        },
        name: {
            type: GraphQLString,
            description: 'phone a merchant Profile',
        },
        picture: {
            type: GraphQLString,
            description: 'picture a merchant Profile',
        },
        instagram: {
            type: GraphQLInt,
            description: 'name of merchant instagram',
        },
        desciption: {
            type: GraphQLString,
            description: 'mail of merchant desciption',
        },
        openingTimes: {
            type: GraphQLString,
            description: 'lastname of merchant openingTimes',
        },
        status: {
            type: GraphQLInt,
            description: 'status of merchant Profile',
        },
    }),
});

export default MerchantType;
