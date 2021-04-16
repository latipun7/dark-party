'use strict';

const { get } = require('https');

const { writeFileSyncToThemeDirectory } = require('./utils');
const colorThemeKeys = require('./themes/theme-color');

const THEME_COLOR_URL =
  'https://code.visualstudio.com/api/references/theme-color';

const NOT_THEME_KEYS = [
  'workbench.colorCustomizations',
  'editor.tokenColorCustomizations',
];

/**
 * Get all html text of the theme color pages in vscode api references.
 * @param {string} url - Theme color url.
 * @returns {Promise<string>} Promise of html text.
 */
function getBodyHTML(url) {
  const result = new Promise((resolve, reject) => {
    get(url, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (data) => {
        body += data;
        return body;
      });
      response.on('end', () => resolve(body));
      response.on('error', reject);
    });
  });

  return result;
}

/**
 * Get all possible color theme available.
 * @param {string} url - Theme color api references url.
 * @returns {Promise<string[]>} Promise of color theme array.
 */
async function getColorTheme(url) {
  const bodyHTML = await getBodyHTML(url);

  const allCodeTags = bodyHTML.match(/<code>.*?<\/code>/gi);

  if (!allCodeTags) {
    throw new Error(
      "Couldn't find any matches with <code>...</code>, maybe docs have chaged?"
    );
  }

  const colorTheme = [...allCodeTags]
    .map((key) => key.replace('<code>', '').replace('</code>', ''))
    .filter((key) => !/ /.test(key)) // Remove if contains spaces
    .filter((key) => !/#.../.test(key)) // Remove if is a hex color
    .filter((key) => !/&quot;/.test(key)) // Remove if contains quotes
    .filter((key) => key.length > 4) // Remove if it's very small
    .filter((key) => !NOT_THEME_KEYS.includes(key)); // Remove if its in the blacklist

  return colorTheme;
}

(async () => {
  const colorThemeAvailable = await getColorTheme(THEME_COLOR_URL);

  let contents = 'Unsupported keys (probably deprecated): \n';

  for (const key of Object.keys(colorThemeKeys)) {
    if (!colorThemeAvailable.includes(key)) {
      contents += `${key}\n`;
    }
  }

  contents += '\n\nPossible missing keys: \n';
  for (const key of colorThemeAvailable) {
    if (!Object.keys(colorThemeKeys).includes(key)) {
      contents += `${key}\n`;
    }
  }

  writeFileSyncToThemeDirectory('missing-keys.txt', contents);
})();
