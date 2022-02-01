import { createUserMutationResolver } from '@src/graphql/schema/resolvers/mutation/createUserMutation';
import { loginUserMutationResolver } from './authUserMutation';
import { createMerchantMutationResolver } from './createMerhantMutation';
import { updateMerchantMutationResolver } from './updateMerchantMutation';
import { updateUserMutationResolver } from './updateUserMutation';

const mutation = {
  createUser: {
    resolve: createUserMutationResolver,
  },
  updateUser: {
    resolve: updateUserMutationResolver
  },
  authUser: {
    resolve: loginUserMutationResolver
  },
  createMerchant: {
    resolve: createMerchantMutationResolver
  },
  updateMerchant: {
    resolve: updateMerchantMutationResolver
  }
};

export default mutation;
