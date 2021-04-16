'use strict';

const { writeFileSyncToThemeDirectory } = require('./utils');

const darkParty = require('./themes');

writeFileSyncToThemeDirectory(
  'dark-party.json',
  JSON.stringify(darkParty, null, 2)
);
