import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
} from 'graphql';


const MerchantType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Merchant',
    description: 'A Merchant',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLID),
            description: 'id of the merchant',
        },
        phone: {
            type: GraphQLString,
            description: 'phone a merchant',
        },
        picture: {
            type: GraphQLString,
            description: 'picture a merchant',
        },
        optionsId: {
            type: GraphQLInt,
            description: 'name of merchant',
        },
        email: {
            type: GraphQLString,
            description: 'mail of merchant',
        },
        lastName: {
            type: GraphQLString,
            description: 'lastname of merchant',
        },
        password: {
            type: GraphQLString,
            description: 'password of merchant',
        },
        menuId: {
            type: GraphQLInt,
            description: 'picture of merchant',
        },
        validation_date: {
            type: GraphQLString,
            description: 'picture of merchant',
        },
        status: {
            type: GraphQLInt,
            description: 'status of merchant',
        },
    }),
});

export default MerchantType;
