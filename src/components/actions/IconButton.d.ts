/** Square icon-only button for toolbars, close actions and row actions. Always pass a label. */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Required accessible label (also used as title tooltip). */
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  /** Toggle state — renders lime-soft background when true. */
  pressed?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
