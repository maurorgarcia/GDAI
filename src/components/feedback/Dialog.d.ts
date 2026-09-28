/** Modal for focused decisions and human confirmation (e.g. approving an AI action). Esc and overlay click close it. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
