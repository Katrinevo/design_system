export interface CheckboxOption {
  id: number;
  label: string;
  checked: boolean;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
}