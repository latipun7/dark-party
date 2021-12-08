import { resolve } from 'path';

export const THEME_DIRECTORY = resolve(__dirname, '..', 'themes');

export const THEME_COLOR_URL =
  'https://code.visualstudio.com/api/references/theme-color';

export const NOT_THEME_KEYS = [
  'workbench.colorCustomizations',
  'editor.tokenColorCustomizations',
];
