import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateMerchantInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateMerchantInput',
  description: 'Create Merchant input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant name',
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant phone',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant password',
    },
  },
});

export default CreateMerchantInput;
