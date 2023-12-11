import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, AlertColor, Snackbar } from '@mui/material';

interface SnackbarUtilsOpenParameter {
  message: string;
  type?: string;
}

interface SnackbarComponentProps {
  removeToDom: () => void;
}

export const SNACKBAR_STYLE = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};

const SnackbarUtils = {
  open: ({ message, type }: SnackbarUtilsOpenParameter) => {
    const SnackbarComponent = ({ removeToDom }: SnackbarComponentProps) => {
      const [open, setOpen] = useState<boolean>(true);

      const close = () => {
        setOpen(false);
        removeToDom();
      };

      const modal = (
        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={close}
        >
          <Alert severity={type as AlertColor}>{message}</Alert>
        </Snackbar>
      );

      return modal;
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    const root = createRoot(container);

    const removeToDom = () => {
      document.body.removeChild(container);
    };

    root.render(<SnackbarComponent removeToDom={removeToDom} />);
  },
};

export default SnackbarUtils;
