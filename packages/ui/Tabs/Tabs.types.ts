export interface TabItem {
  id: number;
  label: string;
  active?: boolean;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
}