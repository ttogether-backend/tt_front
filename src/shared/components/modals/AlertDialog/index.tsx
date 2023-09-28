import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AlertDialogProps } from './AlertDialog.types';
import { dialogStyles } from '../common/Dialog.styles';
import { Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  message,
  isOpen,
  isCloseBackgroundClick,
  handleClose,
  buttons,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: dialogStyles.layout,
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={dialogStyles.title}>
          <div style={dialogStyles.titleContainer}>
            <div>{title}</div>
            <div>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={dialogStyles.closeIconButton}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </DialogTitle>

        <DialogContent sx={dialogStyles.noMessage}>
          <DialogContentText id="alert-dialog-description" sx={dialogStyles.message}>
            {message}
          </DialogContentText>
        </DialogContent>

        <Divider />
        <DialogActions sx={dialogStyles.buttonContainer}>
          {buttons?.map(({ style, label, handleClick }, index: number) => (
            <Button
              key={`alert-diloag-button-${index}`}
              onClick={handleClick}
              style={dialogStyles.button[style as any]}
            >
              {label}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
};
