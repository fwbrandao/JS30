const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx', 'ts', 'tsx'],
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
};