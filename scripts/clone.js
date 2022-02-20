const download = require('download-git-repo');
const path = require('path');
const pkg = require('../package.json');
const fs = require('fs-extra');

download(
  'saadeghi/daisyui#v' + pkg.devDependencies.daisyui,
  path.resolve(__dirname, '../src/_daisyui'),
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    fs.emptyDirSync(path.resolve(__dirname, '../src/_daisyui/examples'));
    console.log('Clone done.');
  },
);
