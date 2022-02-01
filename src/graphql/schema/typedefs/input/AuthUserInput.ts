import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const AuthUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'AuthUserInptu',
  description: 'User Auth input',
  fields: {
    phone: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The user phone',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The user password',
    },
  },
});

export default AuthUserInput;
