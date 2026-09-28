/** Label + control + helper/validation message wrapper. Input, Select and Textarea use it internally; use directly for custom controls. */
export interface FieldProps {
  label?: string;
  htmlFor?: string;
  /** Appends "· opcional" to the label. */
  optional?: boolean;
  hint?: string;
  /** Error message — explain what went wrong and how to fix it. */
  error?: string;
  success?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
