const register = () => {
  const tsNode = require('ts-node');
  const path = require('path');

  tsNode.register({
    project: path.resolve(__dirname, 'tsconfig.json'),
  });
};

register();

module.exports = require('./src/index.ts');
module.exports.register = register;
