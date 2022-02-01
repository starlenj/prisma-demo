import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} from 'graphql';


const MerchantType: GraphQLObjectType = new GraphQLObjectType({
    name: 'MerchantOptions',
    description: 'A Merchant Profile',
    fields: () => ({
        id: {
            type: GraphQLNonNull(GraphQLID),
            //description: 'id of the merchant MerchantOptions',
        },
        merchantId: {
            type: GraphQLString,
            //description: 'merchantId a  MerchantOptions',
        },
        punchCount: {
            type: GraphQLString,
            //description: 'picture a  MerchantOptions',
        },
        punchIcon: {
            type: GraphQLInt,
            //description: 'name of  instagram',
        },
        punchBackGroundImage: {
            type: GraphQLString,
            //description: 'mail of  desciption',
        },
        downContext: {
            type: GraphQLString,
            //description: 'lastname of  openingTimes',
        },
        validItemsDate: {
            type: GraphQLString,
            //description: 'lastname of  openingTimes',
        },
        status: {
            type: GraphQLInt,
            //description: 'status of  Profile',
        },
    }),
});

export default MerchantType;
