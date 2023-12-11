import { AlertDialog } from 'src/shared/components/modals/AlertDialog';
import { useState } from 'react';
import { ModalButtonProps } from 'src/shared/components/modals/common/DialogButton.types';
import { createRoot } from 'react-dom/client';

interface DialogUtilsOpenParameter {
  title: string;
  buttons: ModalButtonProps[];
  message?: string;
  isCloseBackgroundClick?: boolean;
}

interface DialogComponentProps {
  removeToDom: () => void;
}

export const DIALOG_BUTTON_STYLE = {
  white: 'white',
  black: 'black',
  red: 'red',
  green: 'greed',
  gray: 'gray',
};

const DialogUtils = {
  open: ({ title, buttons, message, isCloseBackgroundClick }: DialogUtilsOpenParameter) => {
    const DialogComponent = ({ removeToDom }: DialogComponentProps) => {
      const [open, setOpen] = useState<boolean>(true);

      const close = () => {
        setOpen(false);
        removeToDom();
      };

      const props = {
        title,
        message,
        isCloseBackgroundClick,
        buttons,
        isOpen: open,
        handleClose: close,
      };

      const modal = <AlertDialog {...props} />;

      return modal;
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    const root = createRoot(container);

    const removeToDom = () => {
      document.body.removeChild(container);
    };

    root.render(<DialogComponent removeToDom={removeToDom} />);
  },
};

export default DialogUtils;
