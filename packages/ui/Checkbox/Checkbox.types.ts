export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  multiple?: boolean;
}