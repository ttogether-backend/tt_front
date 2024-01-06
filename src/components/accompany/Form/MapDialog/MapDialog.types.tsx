export type MapDialogProps = {
  title: string;
  message?: string;
  confirmButtonLabel?: string;
  isOpen: boolean;
  isCloseBackgroundClick?: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};
