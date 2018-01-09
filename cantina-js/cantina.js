#!/usr/bin/env node

var path = require('path')

const CANTINA_ENV = {
  PROJECT_ROOT: process.cwd(),
  MODULE: path.join(__dirname, '/'),
  FS: require('fs'),
  PATH: path,
  CONFIG_FILE_NAME: 'cantina.config.js',
  PATH_SPLIT: '__root_'
}
const logo = CANTINA_ENV.FS.readFileSync(CANTINA_ENV.PATH.join(__dirname, '/') + '/src/logo.js', 'utf8')
const config = require(`${CANTINA_ENV.PROJECT_ROOT}/${CANTINA_ENV.CONFIG_FILE_NAME}`)
// console.log(CANTINA_ENV)
console.log(logo)
// console.log(config)
