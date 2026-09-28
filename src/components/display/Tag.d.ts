/** Mono uppercase category label (service type, technology, integration). Not for status — use Badge. */
export interface TagProps {
  icon?: string;
  /** Shows a remove (x) button. */
  onRemove?: () => void;
  /** Lime outline. */
  selected?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
