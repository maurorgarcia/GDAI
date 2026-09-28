/** Switch between views of the same context. underline = page-level sections; segmented = compact filters/toggles. */
export interface TabItem { value: string; label: string; count?: number; }
export interface TabsProps {
  items: Array<string | TabItem>;
  value: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'segmented';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
