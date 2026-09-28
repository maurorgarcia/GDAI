/** Scannable data table: mono uppercase headers, hairline rows, no zebra, no vertical rules. */
export interface TableColumn<T = any> {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  /** Mono tabular figures, right-aligned. */
  numeric?: boolean;
  /** Secondary text colour. */
  muted?: boolean;
  render?: (row: T) => React.ReactNode;
}
export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  rows: T[];
  rowKey?: string;
  dense?: boolean;
  onRowClick?: (row: T) => void;
  selectedKey?: string | number;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;
