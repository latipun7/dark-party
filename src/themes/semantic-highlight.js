'use strict';

const { text } = require('./colors');

/** @type {import('../declaration').SemanticTokenColor} */
const semanticHighlight = {
  enumMember: {
    foreground: text.fountainBlue,
  },
  'variable.constant': {
    foreground: text.whiskey,
  },
  'variable.defaultLibrary': {
    foreground: text.chalky,
  },
  'variable:dart': {
    foreground: text.whiskey,
  },
  'property:dart': {
    foreground: text.whiskey,
  },
  'annotation:dart': {
    foreground: text.whiskey,
  },
  'parameter.label:dart': {
    foreground: text.lightWhite,
  },
};

module.exports = semanticHighlight;
