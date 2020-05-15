/* eslint-disable import/no-extraneous-dependencies */

/*
  Gatsby file used by Docz
*/

const path = require('path');
const cpx = require('cpx');
const fs = require('fs');

// Make sure the Ventura component is accessible in gatsby-theme-docz
const copyVenturaComponentToBuildFolder = () => {
  return new Promise((resolve, reject) => {
    // The src to copy from
    const sourcePath = path.resolve(__dirname, '../src/components/Ventura');
    // The new path in .docz
    const buildPath = path.resolve(__dirname, 'src/components/Ventura');

    // Create missing directories in path recursively
    fs.mkdirSync(buildPath, { recursive: true });

    // copy Ventura component files to new path
    cpx.copy(sourcePath, buildPath, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
};

exports.onPreBootstrap = ({ reporter }) => {
  copyVenturaComponentToBuildFolder()
    .then(() => reporter.info('copied Ventura component'))
    .catch((error) => reporter.error('Error while copying Ventura component', error));
};
