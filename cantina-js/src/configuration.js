var path = require('path')
const CANTINA_ENV = {
  PROJECT_ROOT: process.cwd(),
  MODULE: path.join(__dirname, '/'),
  FS: require('fs'),
  PATH: path,
  CONFIG_FILE_NAME: 'cantina.config.js',
  PATH_SPLIT: '__root_'
}

 CANTINA_ENV.LOGO = CANTINA_ENV.FS.readFileSync(CANTINA_ENV.PATH.join(__dirname, '/') + '/logo.js', 'utf8')
 CANTINA_ENV.USR_CONFIG = require(`${CANTINA_ENV.PROJECT_ROOT}/${CANTINA_ENV.CONFIG_FILE_NAME}`)

module.exports = CANTINA_ENV
