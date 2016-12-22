/**
 * Created by kevin on 22/12/2016.
 */

import bodyParser from 'body-parser';
import multer from 'multer';
import parseGraphQLHTTP from '../parse-graphql';
import schema from './schema';

const setup = (app, graphiql = false) => {
  app.use('/graphql', bodyParser.json({limit: '50mb'}));
  app.use('/graphql', bodyParser.urlencoded({extended:true, limit:'50mb'}));
  
  let storage = multer.memoryStorage();
  app.use('/graphql', multer({ storage }).single("file"));
  
  app.use('/graphql', parseGraphQLHTTP({ schema, graphiql }));
};

export default {
  setup
};

