import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateMerchantInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateMerchantProfileInput',
  description: 'Create Merchant input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant name',
    },
    picture: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant picture',
    },
    instagram: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant instagram',
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant description',
    },
    openingTimes: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Merchant openingTimes',
    },

  },
});

export default CreateMerchantInput;
