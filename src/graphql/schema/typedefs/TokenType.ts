import {
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
  } from 'graphql';
  
  
  const TokenType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Token',
    description: 'User Token',
    // thunk for cyclical horribly documented
    fields: () => ({
     
      token: {
        type: GraphQLString,
        description: 'User Token',
      },
    }),
  });
  
  export default TokenType;
  