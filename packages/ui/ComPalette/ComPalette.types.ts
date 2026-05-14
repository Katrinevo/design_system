export interface Command {
  id: number;
  title: string;
}

export interface CommandPaletteProps {
  commands: Command[];
}