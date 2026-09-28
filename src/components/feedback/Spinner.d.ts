/** Inline circular loader for short waits (< 2s) and button loading states. */
export interface SpinnerProps {
  size?: number;
  color?: string;
  /** Screen-reader label. Default "Cargando". */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
