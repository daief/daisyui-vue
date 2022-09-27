#!/usr/bin/env node

const register = () => {
  const tsNode = require('ts-node');
  const path = require('path');

  tsNode.register({
    project: path.resolve(__dirname, 'tsconfig.json'),
  });
};

register();

require('./src/cli.ts');
