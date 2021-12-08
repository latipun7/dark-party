type FontStyle = 'italic' | 'bold' | 'underline';

/** TextMate text settings. */
interface TokenSettings {
  /** Foreground color for the token. */
  foreground?: string;

  /** Font style of the rule: 'italic', 'bold' or 'underline' or a combination. */
  fontStyle?:
    | FontStyle
    | `${FontStyle} ${FontStyle}`
    | `${FontStyle} ${FontStyle} ${FontStyle}`;
}

interface SemanticToken {
  foreground: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

/** TextMate token color. */
export interface TokenColor {
  /** Description of the rule. */
  name?: string;

  /** Scope selector against which this rule matches. */
  scope: string | string[];

  /** Colors and styles for the token. */
  settings: TokenSettings;
}

export type SemanticTokenColors = Record<
  string,
  string | TokenSettings | SemanticToken
>;

/** Dark Party color theme. */
export interface DarkParty {
  /** Name of the theme. */
  name: string;

  /** Type of the theme: dark, light, or high contrast. */
  type: 'dark' | 'light' | 'hc';

  /** Enable semantic highlighting? */
  semanticHighlighting?: boolean;

  /** Workbench theme color. */
  colors?: Record<string, string>;

  /** TextMate token color for syntax highlighting. */
  tokenColors?: TokenColor[];

  /** Semantic highlighting color theme. */
  semanticTokenColors?: SemanticTokenColors;
}
