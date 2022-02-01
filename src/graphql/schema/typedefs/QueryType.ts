import { GraphQLObjectType } from 'graphql';
import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: getAllAuthorsQuery,
  },
});

export default queryType;
