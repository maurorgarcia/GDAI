/**
 * Action trigger. One primary (lime) per view; secondary for supporting actions; tertiary for low emphasis.
 * @startingPoint section="Actions" subtitle="Primary, secondary, tertiary buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = lime accent (one per view); secondary = outlined; tertiary = text; inverse = off-white on dark; danger = destructive. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name before the label. */
  iconLeft?: string;
  /** Lucide icon name after the label (e.g. "arrow-right" for forward CTAs). */
  iconRight?: string;
  /** Shows a spinner and blocks clicks. Use for async actions. */
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
