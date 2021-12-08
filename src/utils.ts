import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { THEME_DIRECTORY } from './constants';

/** Write document / data to the `theme` directory. */
function writeFileToThemeDirectory(fileName: string, data: string): void {
  if (!existsSync(THEME_DIRECTORY)) mkdirSync(THEME_DIRECTORY);

  writeFileSync(join(THEME_DIRECTORY, fileName), data);
}

/** Check if value is object record. */
function isObject(value: unknown): value is object {
  return typeof value === 'object' && value != null;
}

/** Remove properties from an object with null or undefined value recursively. */
function removeEmpty<T>(object: object): Record<string, T> {
  return Object.fromEntries(
    Object.entries(object)
      .filter(([_, value]) => value != null)
      .map(([key, value]) => [
        key,
        isObject(value) ? removeEmpty(value) : value,
      ])
  );
}

export { writeFileToThemeDirectory, removeEmpty, isObject };
