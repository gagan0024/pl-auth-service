const _ = require('lodash');

const environment = process.env.NODE_ENV || 'development';

const config = require(`../config/config.${environment}.json`);
const defaultConfig = require(`../config/config.development.json`);
const finalConfig = _.merge(defaultConfig, config);

global.gConfig = finalConfig;

