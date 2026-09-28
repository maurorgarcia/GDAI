/** Key metric: mono label, large value, delta with arrow + context. Use 3–4 per dashboard, each answering a question. */
export interface StatProps {
  label: string;
  value: string | number;
  unit?: string;
  /** e.g. "12%". Shown with an arrow so meaning never depends on colour alone. */
  delta?: string;
  deltaDirection?: 'up' | 'down';
  /** Whether the change is good (green) or bad (red). */
  deltaPositive?: boolean;
  /** Comparison context, e.g. "vs. mes anterior". */
  context?: string;
  /** Lime value — for the single most important metric. */
  highlight?: boolean;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
