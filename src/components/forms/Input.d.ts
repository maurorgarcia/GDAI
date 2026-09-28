/**
 * Text input (or textarea with multiline) with built-in label, hint and validation.
 * @startingPoint section="Forms" subtitle="Text input with label, hint and validation states" viewport="700x420"
 */
export interface InputProps {
  /** Visible label. Always provide one — never rely on placeholder alone. */
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  optional?: boolean;
  /** Leading Lucide icon (e.g. "search", "mail"). */
  icon?: string;
  /** Trailing spinner, e.g. while validating remotely. */
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Renders a textarea. */
  multiline?: boolean;
  rows?: number;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Input(props: InputProps): JSX.Element;
