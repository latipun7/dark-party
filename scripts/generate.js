const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, Schema, load } = require('js-yaml');

/**
 * NOTE: fontStyle is a space-separated list of any of `italic`, `bold`, `underline`.
 * @typedef {Object} TokenColor - Textmate token color.
 * @prop {string} [name] - Optional name.
 * @prop {string[]} scope - Array of scopes.
 * @prop {Record<'foreground'|'background'|'fontStyle',string|undefined>} settings - Textmate token settings.
 */

/**
 * @typedef {Object} Theme - Parsed theme object.
 * @prop {Record<'base'|'vivid'|'ansi'|'other', string[]>} darkparty - Dark Party color variables.
 * @prop {Record<string, string|null|undefined>} colors - VSCode color mapping.
 * @prop {TokenColor[]} tokenColors - Textmate token colors.
 */

const withAlphaType = new Type('!alpha', {
  kind: 'sequence',
  construct: ([hexRGB, alpha]) => hexRGB + alpha,
  represent: ([hexRGB, alpha]) => hexRGB + alpha,
});

const schema = Schema.create([withAlphaType]);

module.exports = async () => {
  const yamlFile = await readFile(
    join(__dirname, '..', 'src', 'dark-party.yml'),
    'utf-8'
  );

  /** @type {Theme} */
  const base = load(yamlFile, { schema });

  // Remove nulls and other false values from colors
  for (const key of Object.keys(base.colors)) {
    !base.colors[key] && delete base.colors[key];
  }

  return { base };
};
