/**
 * Created by kevin on 26/12/2016.
 */
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLNonNull
}from'graphql'
export const GeoPointType = new GraphQLObjectType({
  name: 'GeoPoint',
  description: 'GEO point of a location denoted by latitude and longitude',
  fields: () => ({
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'latitude of the GeoPoint'
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'longitude of the GeoPoint'
    }
  })
});
export const GeoPointInputType = new GraphQLInputObjectType({
  name: 'GeoPointInput',
  description: 'Input of GEO point of a location denoted by latitude and longitude',
  fields: () => ({
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'latitude of the GeoPoint'
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'longitude of the GeoPoint'
    }
  })
});
