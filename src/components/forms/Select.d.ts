/** Native select styled to match Input. Use for 4+ options; use Radio for 2–3. */
export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  options: Array<string | SelectOption>;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
