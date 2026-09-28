/** Explains what is missing, why it matters and what to do next. Never just "No data". */
export interface EmptyStateProps {
  icon?: string;
  /** What is missing. */
  title: string;
  /** Why it matters. */
  description?: string;
  /** What to do next — usually one primary Button. */
  actions?: React.ReactNode;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
