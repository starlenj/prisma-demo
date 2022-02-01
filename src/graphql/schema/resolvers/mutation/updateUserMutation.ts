import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import UserType from '@src/graphql/schema/typedefs/UserType';
import CreateUserInput from '@src/graphql/schema/typedefs/input/CreateUserInput';
import { User } from '@prisma/client';
import { updateUser } from '@src/data/app.user.service';
import CreateMerchantInput from '../../typedefs/input/CreateMerchantInput';
export const updateUserMutationResolver: GraphQLFieldResolver<
    unknown,
    IApolloServerContext
> = async (
    _source,
    { input: { name, id, phone, lastName, email, picture } },
    _context,
    _info
): Promise<User> => {
        return updateUser(name, id, phone, lastName, email, picture);
    };

const updateUserMutation: GraphQLFieldConfig<
    unknown,
    IApolloServerContext
> = {
    description: 'create User',
    type: UserType,
    args: {
        input: {
            type: CreateMerchantInput,
        },
    },
    resolve: updateUserMutationResolver,
};

export default updateUserMutation;
