import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateAuthorInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Create User input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The user name',
    },
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

export default CreateAuthorInput;
