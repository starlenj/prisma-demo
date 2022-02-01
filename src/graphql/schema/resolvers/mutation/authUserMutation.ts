import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import UserType from '@src/graphql/schema/typedefs/UserType';
import { checkUser, updateUser } from '@src/data/app.user.service';
import AuthUserInput from '../../typedefs/input/AuthUserInput';
export const loginUserMutationResolver: GraphQLFieldResolver<
    unknown,
    IApolloServerContext
> = async (
    _source,
    { input: { phone, password } },
    _context,
    _info
): Promise<string> => {
        return checkUser(phone , password);
    };

const loginUserMutation: GraphQLFieldConfig<
    unknown,
    IApolloServerContext
> = {
    description: 'User Auth',
    type: UserType,
    args: {
        input: {
            type: AuthUserInput,
        },
    },
    resolve: loginUserMutationResolver,
};

export default loginUserMutation;


