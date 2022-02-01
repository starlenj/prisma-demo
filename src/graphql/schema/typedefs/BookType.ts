import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} from 'graphql';
// eslint-disable-next-line import/no-cycle
import UserType from '@src/graphql/schema/typedefs/UserType';

const BookType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Book',
  description: 'A book',
  // thunk to refer to author type
  fields: () => ({
    bookId: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the book',
    },
    title: {
      type: GraphQLString,
      description: 'title of book',
    },
    author: {
      type: UserType,
      description: 'author of book',
    },
    authorId: {
      type: GraphQLInt,
      description: 'id of the author',
    },
  }),
});

export default BookType;
