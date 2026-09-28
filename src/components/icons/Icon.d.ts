/** Lucide icon rendered as a currentColor mask. Any Lucide name works (kebab-case). */
export interface IconProps {
  /** Lucide icon name, e.g. "arrow-right", "workflow", "bot". */
  name: string;
  /** Pixel size. Default 16. Use 14 (dense), 16 (UI), 20 (nav), 24 (feature). */
  size?: number;
  /** Override colour. Defaults to currentColor. */
  color?: string;
  /** Accessible label. Omit for decorative icons. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
