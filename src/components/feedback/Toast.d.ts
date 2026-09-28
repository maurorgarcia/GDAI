/** Transient confirmation of something that actually happened. Positioning (bottom-right stack) is up to the consumer. */
export interface ToastProps {
  status?: 'success' | 'danger' | 'warning' | 'info' | 'loading';
  title: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
