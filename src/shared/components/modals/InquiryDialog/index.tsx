import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { IconButton, Stack, TextField, TextFieldProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InquiryDialogFormValues, SelectListDialogProps } from './inquiryDialog.types';
import { dialogStyles } from '../common/Dialog.styles';
import { inquiryDialogStyles } from './InquiryDialog.styles';

export const InquiryDialog: React.FC<SelectListDialogProps> = ({
  isOpen,
  isCloseBackgroundClick,
  handleClose,
  handleConfirm,
}) => {
  const titleInputRef = React.useRef<TextFieldProps>(null);
  const contentInputRef = React.useRef<TextFieldProps>(null);

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="select-list-dialog-title"
        aria-describedby="select-list-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: dialogStyles.layoutBig,
        }}
      >
        <DialogTitle id="select-list-dialog-title" sx={dialogStyles.title}>
          <div style={dialogStyles.titleContainer}>
            <div>문의하기</div>
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

        <DialogContent style={dialogStyles.noMessage}>
          <DialogContentText id="alert-dialog-description" sx={dialogStyles.message}>
                투투에 궁금한 내용을 보내주세요!
          </DialogContentText>
        </DialogContent>

        <DialogContent dividers>
            <Stack spacing={2}>
            <TextField
                    sx={inquiryDialogStyles.textField}
                    placeholder={'제목을 작성해주세요.'}
                    inputRef={titleInputRef}
                    InputProps={{ sx: inquiryDialogStyles.textFieldInput }}
                  />
                  <TextField
                    sx={inquiryDialogStyles.textField}
                    placeholder={'내용을 작성해주세요.'}
                    multiline
                    inputRef={contentInputRef}
                    InputProps={{ sx: inquiryDialogStyles.multilineTextfieldInput }}
                    rows={10}
                  />
            </Stack>
               
        </DialogContent>

        <DialogActions sx={dialogStyles.buttonContainer}>
          <Button
            onClick={async () => {
              const result: InquiryDialogFormValues = {
                title: titleInputRef.current?.value as string,
                content: contentInputRef.current?.value as string
              }

              await handleConfirm(result);
              
              handleClose();
            }}
            style={dialogStyles.button.black}
          >
            요청 보내기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
