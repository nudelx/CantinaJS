#!/usr/bin/env node

const CANTINA_ENV = require('./src/configuration')
const bashColors = require('./src/bachColors')
console.log(bashColors.yellow + CANTINA_ENV.LOGO + bashColors.white)
var argv = require('minimist')(process.argv.slice(2));
console.log('args', argv)
