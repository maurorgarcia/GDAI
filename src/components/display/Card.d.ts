/**
 * Bordered surface for a meaningful group. Never nest cards; prefer open layouts + dividers when grouping is obvious.
 * @startingPoint section="Display" subtitle="Bordered surface with eyebrow, title and footer" viewport="700x320"
 */
export interface CardProps {
  /** Mono uppercase label above the title (e.g. "01 · Diagnóstico"). */
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Top-right slot (IconButton, Badge). */
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** flat = transparent background, border only. */
  variant?: 'default' | 'flat';
  /** Hover border; set automatically when onClick is passed. */
  interactive?: boolean;
  /** Lime border for selected state. */
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
