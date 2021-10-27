const download = require('download-git-repo');
const path = require('path');

download(
  'saadeghi/daisyui#v1.16.0',
  path.resolve(__dirname, '../src/_daisyui'),
  (err) => {
    if (err) throw err;
    console.log('Clone done.');
  },
);
