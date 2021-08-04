interface ToolTip {
  name: string;
  icon: string;
  shortcut?: string;
  shortcutSymbol?: string;
}

type ToolTips = { [name: string]: ToolTip };

export { ToolTip, ToolTips };
