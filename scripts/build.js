'use strict';

const path = require('path');
const fsp = require('./fsp');
const loadThemes = require('./loadThemes');

const THEME_DIR = path.join(__dirname, '..', 'themes');
const THEME_YAML_FILE = path.join(__dirname, '..', 'src', 'dark-party.yml');

function toJSON(theme) {
  return JSON.stringify(theme, null, 4);
}

(async () => {
  if (!await fsp.exists(THEME_DIR)) {
    await fsp.mkdir(THEME_DIR);
  }

  const { standardTheme, softTheme } = await loadThemes(THEME_YAML_FILE);
  const standardThemePath = path.join(THEME_DIR, 'dark-party.color-theme.json');
  const softThemePath = path.join(THEME_DIR, 'dark-party-soft.color-theme.json');

  await Promise.all([
    fsp.writeFile(standardThemePath, toJSON(standardTheme)),
    fsp.writeFile(softThemePath, toJSON(softTheme))
  ]);
})();
