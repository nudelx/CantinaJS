#!/usr/bin/env node

var path = require('path')

const CANTINA_ENV = {
  PROJECT_ROOT: process.cwd(),
  MODULE: path.join(__dirname, '/'),
  FS: require('fs')
}
console.log(CANTINA_ENV)
