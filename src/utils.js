'use strict';

const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { resolve, join } = require('path');

const THEME_DIRECTORY = resolve(__dirname, '..', 'theme');

/**
 * Write document / data to the `/theme` directory.
 * @param {string} fileName - File name of the document.
 * @param {string} data - File contents.
 */
function writeFileSyncToThemeDirectory(fileName, data) {
  if (!existsSync(THEME_DIRECTORY)) mkdirSync(THEME_DIRECTORY);

  writeFileSync(join(THEME_DIRECTORY, fileName), data);
}

module.exports = { writeFileSyncToThemeDirectory };
