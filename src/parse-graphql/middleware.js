/**
 * Created by kevin on 19/12/2016.
 */
import Parse from 'parse/node';
import graphHTTP from 'express-graphql';
import {createQuery} from './query'

export function parseGraphQLHTTP({schema, graphql = false}) {
  const isSchemaLegit = (typeof schema == 'object');
  if (!isSchemaLegit) {
    throw new Error('Invalid schema');
  }
  return graphHTTP(request => {
    const sessionToken = request.headers && request.headers.authorization;
    const baseOps = {
      schema,
      graphql,
      // context:{
      //   ParseQuery:createQuery(null)
      // },
      rootValue: {
        request
      },
    };
    if (!sessionToken) {
      return baseOps;
    }
    const q = new Parse.Query(Parse.Session).equalTo('sessionToken', sessionToken);
    return q.first({userMasterKey: true})
      .then(session => session && session.get('user').fetch({userMasterKey: true}))
      .then(user => {
        // ParseQuery:createQuery(sessionToken);
        const context = {
          sessionToken,
          user
        };
        return Object.assign(baseOps, {context});
      });
  });
} 