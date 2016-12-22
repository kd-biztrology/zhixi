/**
 * Created by kevin on 22/12/2016.
 */
import {
  GraphQLSchema
}from 'graphql';

import {
  QueryType,
  MutationType
}from '../models/graphql';

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
