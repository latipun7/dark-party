import { get } from 'https';
import { NOT_THEME_KEYS, THEME_COLOR_URL } from '../src/constants';
import colorThemeKeys from '../src/themes/theme-colors';
import { writeFileToThemeDirectory } from '../src/utils';

function getBodyHTML(url: string): Promise<string> {
  const result: Promise<string> = new Promise((resolve, reject) => {
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

async function scrapeAvailableColorTheme(url: string) {
  const bodyHTML = await getBodyHTML(url);

  const codeAndH2TagRegex = /<code>[\w.]*?<\/code>|<h2.*?>.*?<\/h2>/gi;
  const tags = bodyHTML.match(codeAndH2TagRegex);

  if (!tags) {
    throw new Error("Couldn't find any tag matches, maybe docs have chaged?");
  }

  const colorTheme = [...tags]
    .map((key) =>
      key
        .replace('<code>', '')
        .replace('</code>', '')
        .replace(/<h2.*?>/, '\n')
        .replace('</h2>', '\n')
    )
    .filter((key) => !/(?:Color formats|Extension colors)/i.test(key))
    .filter((key) => !/&quot;/.test(key)) // Remove if contains quotes
    .filter((key) => key.length > 4) // Remove if it's very small
    .filter((key) => !NOT_THEME_KEYS.includes(key)); // Remove if its in the denylist

  return colorTheme;
}

(async () => {
  const colorThemeAvailable = await scrapeAvailableColorTheme(THEME_COLOR_URL);

  let contents = 'Unsupported keys (probably deprecated):\n';
  for (const key of Object.keys(colorThemeKeys)) {
    if (!colorThemeAvailable.includes(key)) {
      contents += `  '${key}'\n`;
    }
  }

  contents += '\nPossible missing keys:\n';
  for (const key of colorThemeAvailable) {
    if (!Object.keys(colorThemeKeys).includes(key)) {
      contents += /^\n/.test(key) ? `${key}` : `  '${key}': null,\n`;
    }
  }

  writeFileToThemeDirectory('missing-keys.txt', contents);
  // eslint-disable-next-line no-console
})().catch(console.error);
