'use strict';

const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { resolve, join } = require('path');

const darkParty = require('./themes');

const THEME_DIRECTORY = resolve(__dirname, '..', 'theme');

if (!existsSync(THEME_DIRECTORY)) mkdirSync(THEME_DIRECTORY);

writeFileSync(
  join(THEME_DIRECTORY, 'dark-party.json'),
  JSON.stringify(darkParty, null, 2)
);
