/** Linear progress for multi-step or measurable work (imports, syncs, runs). */
export interface ProgressProps {
  /** 0–100. */
  value?: number;
  label?: string;
  showValue?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Progress(props: ProgressProps): JSX.Element;
