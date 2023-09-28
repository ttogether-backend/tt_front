import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  TextFieldProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SelectListDialogProps, SelectListItem } from './SelectListDialog.types';
import { dialogStyles } from '../common/Dialog.styles';
import { BpCheckedIcon, BpIcon, Label, selectListDialogStyles } from './SelectListDialog.styles';

export const SelectListDialog: React.FC<SelectListDialogProps> = ({
  title,
  message,
  list,
  confirmButtonLabel,
  isOpen,
  isCloseBackgroundClick,
  handleClose,
  handleConfirm,
}) => {
  const [selectValue, setSelectValue] = React.useState(list[0].value);
  const inputRef = React.useRef<TextFieldProps>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="select-list-dialog-title"
        aria-describedby="select-list-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: dialogStyles.layout,
        }}
      >
        <DialogTitle id="select-list-dialog-title" sx={dialogStyles.title}>
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

        <DialogContent style={dialogStyles.noMessage}>
          <DialogContentText id="alert-dialog-description" sx={dialogStyles.message}>
            {message}
          </DialogContentText>
        </DialogContent>

        <DialogContent dividers>
          <RadioGroup
            sx={selectListDialogStyles.radioGroup}
            aria-label="ringtone"
            name="ringtone"
            value={selectValue}
            onChange={handleChange}
          >
            {list.map(({ value, content, textfield, placeholder }) => (
              <div 
              key={`select-list-dialog-text-form-${value}`}>
                <FormControlLabel
                  sx={selectListDialogStyles.radioForm}
                  value={value}
                  control={
                    <Radio
                      sx={selectListDialogStyles.radio}
                      icon={<BpIcon />}
                      checkedIcon={<BpCheckedIcon />}
                    />
                  }
                  label={<Label>{content}</Label>}
                />

                {textfield && selectValue == value ? (
                  <TextField
                    sx={selectListDialogStyles.textField}
                    placeholder={placeholder}
                    inputRef={inputRef}
                    InputProps={{ sx: selectListDialogStyles.textFieldInput }}
                  />
                ) : null}
              </div>
            ))}
          </RadioGroup>
        </DialogContent>

        <DialogActions sx={dialogStyles.buttonContainer}>
          <Button
            onClick={async () => {
              const result: SelectListItem =
                list.find((item: SelectListItem) => item.value == selectValue) ?? list[0];

              await handleConfirm({
                ...result,
                textFieldValue: inputRef?.current?.value as string,
              });

              handleClose();
            }}
            style={dialogStyles.button.black}
          >
            {confirmButtonLabel ? confirmButtonLabel : '제출하기'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
