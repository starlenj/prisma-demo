import { GraphQLObjectType } from 'graphql';
import CreateUserMutation from '@src/graphql/schema/resolvers/mutation/createUserMutation';
import updateUserMutation from '../resolvers/mutation/updateUserMutation';
import loginUserMutation from '../resolvers/mutation/authUserMutation';
import createMerchantMutation from '../resolvers/mutation/createMerhantMutation';
import updateMerchantMutation from '../resolvers/mutation/updateMerchantMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CreateUserMutation,
    updateUser: updateUserMutation,
    authUser: loginUserMutation,
    createMerchant: createMerchantMutation,
    updateMerchant: updateMerchantMutation
  },
});

export default mutationType;
