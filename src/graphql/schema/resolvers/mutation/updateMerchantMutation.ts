import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import UserType from '@src/graphql/schema/typedefs/UserType';
import { Merchant, User } from '@prisma/client';
import CreateMerchantInput from '../../typedefs/input/CreateMerchantInput';
import { updateMerchant } from '@src/data/app.merchant.service';
export const updateMerchantMutationResolver: GraphQLFieldResolver<
    unknown,
    IApolloServerContext
> = async (
    _source,
    { input: { id, email } },
    _context,
    _info
): Promise<Merchant> => {
        return updateMerchant(id, email);
    };

const updateMerchantMutation: GraphQLFieldConfig<
    unknown,
    IApolloServerContext
> = {
    description: 'update Merchant',
    type: UserType,
    args: {
        input: {
            type: CreateMerchantInput,
        },
    },
    resolve: updateMerchantMutationResolver,
};

export default updateMerchantMutation;
