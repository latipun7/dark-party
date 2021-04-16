/** TextMate text settings. */
interface TokenSettings {
  /** Foreground text color. */
  foreground?: string;

  /** Optional background text color. */
  background?: string;

  /** Optional text font style. */
  fontStyle?: 'italic' | 'bold' | 'underline' | 'normal';
}

/** TextMate token color. */
export interface TokenColor {
  /** Optional name. */
  name?: string;

  /** Array of scopes. */
  scope: string | string[];

  /** TextMate text settings. */
  settings: TokenSettings;
}

/** Dark Party color theme. */
export interface DarkParty {
  /** Name of the theme. */
  name: string;

  /** Type of the theme: dark, light, or high contrast. */
  type: 'dark' | 'light' | 'hc';

  /** Enable semantic highlighting? */
  semanticHighlighting?: boolean;

  /** Base main theme color. */
  colors?: Record<string, string>;

  /** TextMate token color for syntax highlighting. */
  tokenColors?: TokenColor[];

  /** Semantic highlighting color theme. */
  semanticTokenColors?: any;
}
