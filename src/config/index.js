/**
 * Created by kevin on 19/12/2016.
 */
function loadConfig() {
  try {
    return Object.assign({},
        require('../../config/development/base'),
        require('../../config/development/server'),
        {isDevelopment: true}
    );
  } catch (error) {
    return JSON.parse(process.env.APPLICATION_CONFIG);
  }
}

export default loadConfig;