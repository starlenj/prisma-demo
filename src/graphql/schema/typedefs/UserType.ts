import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} from 'graphql';


const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  // thunk for cyclical horribly documented
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the author',
    },
    phone: {
      type: GraphQLString,
      description: 'phone a user',
    },
    name: {
      type: GraphQLString,
      description: 'name of user',
    },
    email: {
      type: GraphQLString,
      description: 'mail of user',
    },
    lastName: {
      type: GraphQLString,
      description: 'lastname of user',
    },
    password: {
      type: GraphQLString,
      description: '[password] of user',
    },
    picture: {
      type: GraphQLString,
      description: 'picture of user',
    },
    validation_date: {
      type: GraphQLString,
      description: 'picture of user',
    },
    status: {
      type: GraphQLInt,
      description: 'status of user',
    },
  }),
});

export default UserType;
