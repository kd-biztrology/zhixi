/**
 * Created by kevin on 19/12/2016.
 */
import Parse from 'parse/node';
import {createModel, buildOptions} from './model';


export function createQuery(sessionToken) {
  if (!sessionToken) {
    class basicQuery extends Parse.Query {
      constructor(objectClass) {
        super(objectClass);
        this.ObjectClass = objectClass;
      }

      // create a new parse object
      create(attibutes = {}) {
        return new this.ObjectClass(attibutes);
      }
    }
    console.log('return base query');
    return basicQuery;
  }
  class Query extends Parse.Query {
    constructor(objectClass) {
      let objectClassWithSessionToken = createModel(objectClass, sessionToken);
      super(objectClassWithSessionToken);
      this.ObjectClass = objectClassWithSessionToken;
    }

    // create a new parse object
    create(attributes = {}) {
      return new this.ObjectClass(attributes);
    }

    count(options) {
      return super.count(buildOptions(options, sessionToken));
    }

    find(options) {
      return super.find(buildOptions(options, sessionToken));
    }

    first(options) {
      return super.first(buildOptions(options, sessionToken));
    }

    get(objectId, options) {
      return super.get(objectId, buildOptions(options, sessionToken));
    }

  }

  return Query;
}
