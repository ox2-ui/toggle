/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';

const files = [
  'docs/1.js',
  'docs/bundle.js',
  'docs/index.html',
];

Promise.all(
  files.map((file) => copyFile(file))
);

function copyFile(file) {
  const buildPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(
      file,
      buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      }
    );
  })
  .then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function resolveBuildPath(file) {
  return path.resolve(__dirname, '../public/docs/', path.basename(file));
}
