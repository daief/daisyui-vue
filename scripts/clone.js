const download = require('download-git-repo');
const path = require('path');
const pkg = require('../package.json');
const fs = require('fs-extra');

download(
  'saadeghi/daisyui#v' + pkg.dependencies.daisyui,
  path.resolve(__dirname, '../src/_daisyui'),
  (err) => {
    if (err) throw err;
    fs.emptyDirSync(path.resolve(__dirname, '../src/_daisyui/examples'));
    console.log('Clone done.');
  },
);
