import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import UserType from '@src/graphql/schema/typedefs/UserType';
import CreateUserInput from '@src/graphql/schema/typedefs/input/CreateUserInput';
import { User } from '@prisma/client';
import { createUser } from '@src/data/app.user.service';

export const createUserMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { validation_date, name, phone, password, email, status, picture, lastName } },
  _context,
  _info
): Promise<User> => {
    return createUser(validation_date, name, phone, password, email, status, picture, lastName);
  };

const createAuthorMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create User',
  type: UserType,
  args: {
    input: {
      type: CreateUserInput,
    },
  },
  resolve: createUserMutationResolver,
};

export default createAuthorMutation;
