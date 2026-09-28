/** Status indicator. Always pairs colour with an icon/shape and text — never colour alone. */
export interface BadgeProps {
  /** success · warning · danger · info · accent (lime, "active") · neutral (draft/inactive) · processing (spinner). */
  status?: 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'neutral' | 'processing';
  /** Override the default Lucide icon; pass null to hide. */
  icon?: string | null;
  /** Force a dot instead of an icon. */
  dot?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
