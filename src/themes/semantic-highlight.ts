import type { SemanticTokenColors } from '../types';
import { text } from './colors';

const semanticHighlight: SemanticTokenColors = {
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
  macro: {
    foreground: text.whiskey,
  },
};

export default semanticHighlight;
