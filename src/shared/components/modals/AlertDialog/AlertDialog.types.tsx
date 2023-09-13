import { ModalButtonProps } from "../common/DialogButton.types";

export type AlertDialogProps = {
    title: string; 
    message?: string; 
    isOpen: boolean;
    isCloseBackgroundClick?: boolean
    handleClose: () => void;
    buttons: ModalButtonProps[]
  };