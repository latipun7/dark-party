'use strict';

const chroma = require('chroma-js');
const { theme } = require('./colors');

const themeColor = {
  // Contrast colors
  contrastActiveBorder: null,
  contrastBorder: theme.backgroundDarker,

  // Base colors
  focusBorder: theme.comment,
  foreground: theme.foreground,
  'widget.shadow': null,
  'selection.background': theme.purple,
  errorForeground: theme.red,

  // Window border

  // Text colors

  // Button control
  'button.background': theme.selection,
  'button.foreground': theme.foreground,
  'button.hoverBackground': null,

  // Dropdown control
  'dropdown.background': theme.backgroundLight,
  'dropdown.border': theme.backgroundDarker,
  'dropdown.foreground': theme.foreground,

  // Input control
  'input.background': theme.background,
  'input.foreground': theme.foreground,
  'input.border': theme.backgroundDarker,
  'input.placeholderForeground': theme.comment,
  'inputOption.activeBorder': theme.purple,
  'inputValidation.infoForeground': null,
  'inputValidation.infoBackground': null,
  'inputValidation.infoBorder': theme.pink,
  'inputValidation.warningForeground': null,
  'inputValidation.warningBackground': null,
  'inputValidation.warningBorder': theme.orange,
  'inputValidation.errorForeground': null,
  'inputValidation.errorBackground': null,
  'inputValidation.errorBorder': theme.red,

  // Scrollbar control
  'scrollbar.shadow': null,
  'scrollbarSlider.activeBackground': null,
  'scrollbarSlider.background': null,
  'scrollbarSlider.hoverBackground': null,

  // Badge
  'badge.foreground': theme.foreground,
  'badge.background': theme.selection,

  // Progress bar
  'progressBar.background': theme.pink,

  // Lists and trees
  'list.activeSelectionBackground': theme.selection,
  'list.activeSelectionForeground': theme.foreground,
  'list.dropBackground': theme.selection,
  'list.focusBackground': theme.lineHighlight,
  'list.highlightForeground': theme.cyan,
  'list.hoverBackground': theme.lineHighlight,
  'list.inactiveSelectionBackground': theme.lineHighlight,
  'list.inactiveSelectionForeground': null,
  'list.warningForeground': theme.orange,
  'list.errorForeground': theme.red,
  'list.hoverForeground': null,
  'list.focusForeground': null,
  'listFilterWidget.background': theme.backgroundLight,
  'listFilterWidget.outline': theme.backgroundLighter,
  'listFilterWidget.noMatchesOutline': theme.red,

  // Activity Bar
  'activityBar.background': theme.backgroundLight,
  'activityBar.inactiveForeground': theme.comment,
  'activityBar.foreground': theme.foreground,
  'activityBar.border': null,
  'activityBar.activeBorder': chroma(theme.pink).alpha(0.5).hex(),
  'activityBar.activeBackground': chroma(theme.purple).alpha(0.06).hex(),
  'activityBarBadge.background': theme.pink,
  'activityBarBadge.foreground': theme.foreground,

  // Side Bar
  'sideBar.background': theme.backgroundDark,
  'sideBar.foreground': null,
  'sideBar.border': null,
  'sideBarTitle.foreground': theme.foreground,
  'sideBarSectionHeader.background': theme.background,
  'sideBarSectionHeader.foreground': null,
  'sideBarSectionHeader.border': theme.backgroundDarker,

  // Minimap

  // Editor Groups & Tabs
  'editorGroup.border': theme.purple,
  'editorGroup.dropBackground': theme.tabDropBackground,
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': theme.backgroundDarker,
  'editorGroupHeader.tabsBorder': null,
  'tab.activeBackground': theme.background,
  'tab.activeForeground': theme.foreground,
  'tab.border': theme.backgroundDarker,
  'tab.activeBorderTop': chroma(theme.pink).alpha(0.5).hex(),
  'tab.activeBorder': null,
  'tab.unfocusedActiveBorder': null,
  'tab.inactiveBackground': theme.backgroundDark,
  'tab.inactiveForeground': theme.comment,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedInactiveForeground': null,

  // Editor colors
  'editor.foreground': theme.foreground,
  'editor.background': theme.background,
  'editorLineNumber.foreground': theme.comment,
  'editorCursor.foreground': theme.pink,
  'editor.selectionBackground': theme.selection,
  'editor.selectionHighlightBackground': theme.backgroundLighter,
  'editor.inactiveSelectionBackground': null,
  'editor.foldBackground': theme.backgroundDark,
  'editor.wordHighlightBackground': chroma(theme.cyan).alpha(0.31).hex(),
  'editor.wordHighlightStrongBackground': chroma(theme.green).alpha(0.31).hex(),
  'editor.findMatchBackground': chroma(theme.orange).alpha(0.5).hex(),
  'editor.findMatchHighlightBackground': chroma(theme.white).alpha(0.25).hex(),
  'editor.findRangeHighlightBackground': theme.lineHighlight,
  'editor.hoverHighlightBackground': chroma(theme.cyan).alpha(0.5).hex(),
  'editor.lineHighlightBackground': null,
  'editor.lineHighlightBorder': theme.selection,
  'editorLink.activeForeground': theme.cyan,
  'editor.rangeHighlightBackground': chroma(theme.purple).alpha(0.08).hex(),
  'editor.snippetTabstopHighlightBackground': theme.background,
  'editor.snippetTabstopHighlightBorder': theme.comment,
  'editor.snippetFinalTabstopHighlightBackground': theme.background,
  'editor.snippetFinalTabstopHighlightBorder': theme.green,
  'editorWhitespace.foreground': theme.nonText,
  'editorIndentGuide.background': theme.nonText,
  'editorIndentGuide.activeBackground': chroma(theme.white).alpha(0.27).hex(),
  'editorRuler.foreground': theme.nonText,
  'editorCodeLens.foreground': theme.comment,
  'editorBracketMatch.background': null,
  'editorBracketMatch.border': null,
  'editorOverviewRuler.border': theme.backgroundDarker,
  'editorOverviewRuler.findMatchForeground': null,
  'editorOverviewRuler.rangeHighlightForeground': null,
  'editorOverviewRuler.selectionHighlightForeground': theme.orange,
  'editorOverviewRuler.wordHighlightForeground': theme.cyan,
  'editorOverviewRuler.wordHighlightStrongForeground': theme.green,
  'editorOverviewRuler.modifiedForeground': chroma(theme.cyan).alpha(0.5).hex(),
  'editorOverviewRuler.addedForeground': chroma(theme.green).alpha(0.5).hex(),
  'editorOverviewRuler.deletedForeground': chroma(theme.red).alpha(0.5).hex(),
  'editorOverviewRuler.errorForeground': chroma(theme.red).alpha(0.5).hex(),
  'editorOverviewRuler.warningForeground': chroma(theme.orange)
    .alpha(0.5)
    .hex(),
  'editorOverviewRuler.infoForeground': chroma(theme.cyan).alpha(0.5).hex(),
  'editorError.foreground': theme.red,
  'editorError.border': null,
  'editorWarning.foreground': theme.cyan,
  'editorWarning.border': null,
  'editorGutter.background': null,
  'editorGutter.modifiedBackground': chroma(theme.cyan).alpha(0.5).hex(),
  'editorGutter.addedBackground': chroma(theme.green).alpha(0.5).hex(),
  'editorGutter.deletedBackground': chroma(theme.red).alpha(0.5).hex(),

  // Diff editor colors
  'diffEditor.insertedTextBackground': chroma(theme.green).alpha(0.13).hex(),
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': chroma(theme.red).alpha(0.31).hex(),
  'diffEditor.removedTextBorder': null,

  // Editor widget colors
  'editorWidget.background': theme.backgroundDark,
  'editorSuggestWidget.background': theme.backgroundDark,
  'editorSuggestWidget.border': null,
  'editorSuggestWidget.foreground': theme.foreground,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': theme.selection,
  'editorHoverWidget.background': theme.background,
  'editorHoverWidget.border': theme.comment,
  'debugExceptionWidget.background': null,
  'debugExceptionWidget.border': null,
  'editorMarkerNavigation.background': theme.backgroundDark,
  'editorMarkerNavigationError.background': null,
  'editorMarkerNavigationWarning.background': null,

  // Peek view colors
  'peekView.border': theme.selection,
  'peekViewEditor.background': theme.background,
  'peekViewEditorGutter.background': null,
  'peekViewEditor.matchHighlightBackground': chroma(theme.yellow)
    .alpha(0.5)
    .hex(),
  'peekViewResult.background': theme.backgroundDark,
  'peekViewResult.fileForeground': theme.foreground,
  'peekViewResult.lineForeground': theme.foreground,
  'peekViewResult.matchHighlightBackground': chroma(theme.yellow)
    .alpha(0.5)
    .hex(),
  'peekViewResult.selectionBackground': theme.selection,
  'peekViewResult.selectionForeground': theme.foreground,
  'peekViewTitle.background': theme.backgroundDarker,
  'peekViewTitleDescription.foreground': theme.comment,
  'peekViewTitleLabel.foreground': theme.foreground,

  // Merge conflicts colors
  'merge.currentHeaderBackground': chroma(theme.green).alpha(0.56).hex(),
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': chroma(theme.purple).alpha(0.56).hex(),
  'merge.incomingContentBackground': null,
  'merge.border': null,
  'editorOverviewRuler.currentContentForeground': theme.green,
  'editorOverviewRuler.incomingContentForeground': theme.purple,

  // Panel colors
  'panel.background': theme.background,
  'panel.border': theme.purple,
  'panelTitle.activeBorder': theme.pink,
  'panelTitle.activeForeground': theme.foreground,
  'panelTitle.inactiveForeground': theme.comment,

  // Status Bar colors
  'statusBar.background': theme.backgroundDarker,
  'statusBar.foreground': theme.foreground,
  'statusBar.debuggingBackground': theme.red,
  'statusBar.debuggingForeground': theme.backgroundDarker,
  'statusBar.noFolderBackground': theme.backgroundDarker,
  'statusBar.noFolderForeground': theme.foreground,
  'statusBarItem.activeBackground': null,
  'statusBarItem.hoverBackground': null,
  'statusBarItem.prominentBackground': theme.red,
  'statusBarItem.prominentHoverBackground': theme.orange,
  'statusBarItem.remoteForeground': theme.foreground,
  'statusBarItem.remoteBackground': theme.purple,
  'statusBar.border': null,

  // Title Bar colors
  'titleBar.activeBackground': theme.backgroundDark,
  'titleBar.activeForeground': theme.foreground,
  'titleBar.inactiveBackground': theme.backgroundDarker,
  'titleBar.inactiveForeground': theme.comment,

  // Menu Bar colors
  'menu.separatorBackground': null,

  // Notification colors
  'notificationCenter.border': null,
  'notificationCenterHeader.foreground': null,
  'notificationCenterHeader.background': null,
  'notificationToast.border': null,
  'notifications.foreground': theme.foreground,
  'notifications.background': theme.background,
  'notifications.border': null,
  'notificationLink.foreground': null,
  'notificationsErrorIcon.foreground': null,
  'notificationsWarningIcon.foreground': null,

  // Extensions colors
  'extensionButton.prominentForeground': theme.foreground,
  'extensionButton.prominentBackground': chroma(theme.green).alpha(0.56).hex(),
  'extensionButton.prominentHoverBackground': chroma(theme.green)
    .alpha(0.38)
    .hex(),

  // Quick picker colors
  'pickerGroup.border': theme.purple,
  'pickerGroup.foreground': theme.cyan,

  // Integrated Terminal colors
  'terminal.background': theme.background,
  'terminal.foreground': theme.foreground,
  'terminal.ansiBrightBlack': theme.color8,
  'terminal.ansiBrightRed': theme.color9,
  'terminal.ansiBrightGreen': theme.color10,
  'terminal.ansiBrightYellow': theme.color11,
  'terminal.ansiBrightBlue': theme.color12,
  'terminal.ansiBrightMagenta': theme.color13,
  'terminal.ansiBrightCyan': theme.color14,
  'terminal.ansiBrightWhite': theme.color15,
  'terminal.ansiBlack': theme.color0,
  'terminal.ansiRed': theme.color1,
  'terminal.ansiGreen': theme.color2,
  'terminal.ansiYellow': theme.color3,
  'terminal.ansiBlue': theme.color4,
  'terminal.ansiMagenta': theme.color5,
  'terminal.ansiCyan': theme.color6,
  'terminal.ansiWhite': theme.color7,
  'terminalCursor.background': null,
  'terminalCursor.foreground': theme.pink,

  // Debug colors
  'debugToolBar.background': theme.backgroundDark,

  // Testing view colors

  // Welcome page colors
  'welcomePage.buttonBackground': null,
  'welcomePage.buttonHoverBackground': null,
  'walkThrough.embeddedEditorBackground': theme.backgroundDark,

  // Source Control colors

  // Git colors
  'gitDecoration.modifiedResourceForeground': theme.cyan,
  'gitDecoration.deletedResourceForeground': theme.red,
  'gitDecoration.untrackedResourceForeground': theme.green,
  'gitDecoration.ignoredResourceForeground': theme.comment,
  'gitDecoration.conflictingResourceForeground': theme.orange,

  // Settings Editor colors
  'settings.headerForeground': theme.foreground,
  'settings.modifiedItemIndicator': theme.orange,
  'settings.dropdownBackground': theme.backgroundDark,
  'settings.dropdownForeground': theme.foreground,
  'settings.dropdownBorder': theme.backgroundDarker,
  'settings.checkboxBackground': theme.backgroundDark,
  'settings.checkboxForeground': theme.foreground,
  'settings.checkboxBorder': theme.backgroundDarker,
  'settings.textInputBackground': theme.backgroundDark,
  'settings.textInputForeground': theme.foreground,
  'settings.textInputBorder': theme.backgroundDarker,
  'settings.numberInputBackground': theme.backgroundDark,
  'settings.numberInputForeground': theme.foreground,
  'settings.numberInputBorder': theme.backgroundDarker,

  // Breadcrumbs colors
  'breadcrumb.foreground': theme.comment,
  'breadcrumb.background': theme.background,
  'breadcrumb.focusForeground': theme.foreground,
  'breadcrumb.activeSelectionForeground': theme.foreground,
  'breadcrumbPicker.background': theme.backgroundDarker,

  // Snippets colors

  // Symbol Icons colors

  // Notebook colors

  // Chart colors

  // Testing Colors
};

module.exports = themeColor;
