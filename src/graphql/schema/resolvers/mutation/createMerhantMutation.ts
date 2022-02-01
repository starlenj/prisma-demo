import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import UserType from '@src/graphql/schema/typedefs/UserType';
import CreateUserInput from '@src/graphql/schema/typedefs/input/CreateUserInput';
import { Merchant, User } from '@prisma/client';
import { createMerchant } from '@src/data/app.merchant.service';
import CreateMerchantInput from '../../typedefs/input/CreateMerchantInput';

export const createMerchantMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { validation_date, profileId, optionsId, password, email, status, menuId, phone } },
  _context,
  _info
): Promise<Merchant> => {
    return createMerchant(validation_date, profileId, optionsId, password, email, status, menuId, phone);
  };

const createMerchantMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create merchant',
  type: UserType,
  args: {
    input: {
      type: CreateMerchantInput,
    },
  },
  resolve: createMerchantMutationResolver,
};

export default createMerchantMutation;
