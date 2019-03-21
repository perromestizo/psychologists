const path = require('path');

module.exports = {
  rootDir: path.resolve(),
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^components(.*)': '<rootDir>/src/components$1',
    '^constants(.*)': '<rootDir>/src/constants$1',
    '^utils(.*)': '<rootDir>/src/utils$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/enzyme/index.js'
};
