import darkParty from '../src/themes';
import { writeFileToThemeDirectory } from '../src/utils';

writeFileToThemeDirectory(
  'dark-party-color-theme.json',
  JSON.stringify(darkParty, null, 2)
);
