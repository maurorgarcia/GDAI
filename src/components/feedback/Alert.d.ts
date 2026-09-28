/** Inline, persistent message within a page (what happened → what to do). For transient confirmations use Toast. */
export interface AlertProps {
  status?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  title?: string;
  /** Explanation + next step. */
  children?: React.ReactNode;
  /** Right-aligned slot, usually a small Button. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
