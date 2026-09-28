/** Short hint on hover/focus for icon-only controls or truncated values. Never put essential info only in a tooltip. */
export interface TooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'bottom';
  style?: React.CSSProperties;
  children: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
