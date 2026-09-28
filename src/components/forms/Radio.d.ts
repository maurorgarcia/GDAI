/** Single choice within a group sharing the same name. Use for 2–5 mutually exclusive options. */
export interface RadioProps {
  label?: string;
  description?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Radio(props: RadioProps): JSX.Element;
