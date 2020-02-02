const config = require('@fesk/scripts/webpack');

config.externals = config.externals ? config.externals : {};

config.externals.react = 'react';
config.externals['react-dom'] = 'react-dom';

module.exports = config;
