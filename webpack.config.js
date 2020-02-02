const config = require('@fesk/scripts/webpack');

config.externals = config.externals ? config.externals : {};

config.externals.react = 'react';

module.exports = config;
