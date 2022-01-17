const download = require('download-git-repo');
const path = require('path');

download(
  'saadeghi/daisyui#v1.23.1',
  path.resolve(__dirname, '../src/_daisyui'),
  (err) => {
    if (err) throw err;
    console.log('Clone done.');
  },
);
