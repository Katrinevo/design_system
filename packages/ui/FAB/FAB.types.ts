export interface FabAction {
  id: number;
  icon: string;
}

export interface FABProps {
  icon?: string;
  disabled?: boolean;
  actions?: FabAction[];
}