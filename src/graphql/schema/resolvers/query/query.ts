import { getAllUserResolver } from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';

const query = {

  users: {
    resolve: getAllUserResolver,
  },
};

export default query;
