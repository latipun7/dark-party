import type { DarkParty } from '../types';
import { removeEmpty } from '../utils';
import semanticTokenColors from './semantic-highlight';
import tokenColors from './syntax-highlight';
import themeColors from './theme-colors';

const colors = removeEmpty<string>(themeColors);

const darkParty: DarkParty = {
  name: 'Dark Party',
  type: 'dark',
  semanticHighlighting: true,
  colors,
  semanticTokenColors,
  tokenColors,
};

export default darkParty;
