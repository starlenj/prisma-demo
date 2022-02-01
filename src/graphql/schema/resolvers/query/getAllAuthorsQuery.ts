import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { User} from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllUser } from '@src/data/app.user.service';
import UserType from '@src/graphql/schema/typedefs/UserType';

export const getAllUserResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<User[]> => {
  const authors = await getAllUser();
  return authors;
};

const getAllUserQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all user query',
  type: GraphQLList(UserType),
  resolve: getAllUserResolver,
};

export default getAllUserQuery;
