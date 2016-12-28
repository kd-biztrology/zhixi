/**
 * Created by kevin on 26/12/2016.
 */
import {
  GraphQLObjectType
} from 'graphql'

export const QueryType = new GraphQLObjectType({
  name: "Query",
  field: {
    ...RestaurantQueryType,
    ...DishQueryType,
    ...OrderQueryType,
    ...UserQueryType,
  },
});
export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  field: {
    ...RestaurantMutationType,
    ...DishMutationType,
    ...OrderMutationType,
    ...UserMutationType,
  },
});
