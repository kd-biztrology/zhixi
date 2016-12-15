/**
 * Created by kevin on 16-9-25.
 */
import express from 'express';
import serverConfig from './config';
import parseServer from './parse-server';
import  graphqlServer from './graphql-server';

const config = serverConfig();
const serverPort = process.env.PORT || config.SERVER_PORT;
const isDevelopment = (process.env.NODE_ENV === 'development');

const app = express();
parseServer.setup(app, config);
graphqlServer.setup(app, isDevelopment);

app.listen(serverPort, function () {
    console.log(`server running on port ${serverPort}`);
});
