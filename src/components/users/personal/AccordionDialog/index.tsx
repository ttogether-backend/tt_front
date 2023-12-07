import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CloseIcon from '@mui/icons-material/Close';
import { AccordionDialogProps } from './AccordionDialog.types';
import { dialogStyles } from '../../../../shared/components/modals/common/Dialog.styles';
import { BpCheckedIcon, BpIcon, Label, AccordionDialogStyles } from './AccordionDialog.styles';

import {
  FormControlLabel,
  IconButton,
  Radio,
  FormGroup,
  TextField,
  TextFieldProps,
} from '@mui/material';

export const AccordionDialog: React.FC<AccordionDialogProps> = ({
  title,
  message,
  list,
  confirmButtonLabel,
  isOpen,
  isCloseBackgroundClick,
  handleClose,
  handleConfirm,
}) => {
  const titleInputRef = React.useRef<TextFieldProps>(null);
  const contentInputRef = React.useRef<TextFieldProps>(null);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (e, el) => {
    
    const value = Number(e.target.value);
    const index = selectedValues.indexOf(value);

    if (index === -1) {
      // 선택되지 않은 경우 배열에 추가
      setSelectedValues([...selectedValues, el.content[value]]);
    } else {
      // 이미 선택된 경우 배열에서 제거
      const newValues = [...selectedValues];
      newValues.splice(index, 1);
      setSelectedValues(newValues);
    }
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
              {
                list.map((el, idx) => (
                  <Accordion key={`arccordian-menu-${idx}`}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${idx}a-content}`}
                      id={`panel${idx}a-header}`}
                    >
                      <Typography> {el.title} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup onChange={(e) => handleChange(e, el)}>
                      { el.content.map((l,idx) => (
                          <div 
                          key={`select-list-dialog-text-form-${idx}`}>
                            <FormControlLabel
                              sx={AccordionDialogStyles.radioForm}
                              value={idx}
                              control={
                                <Radio
                                  sx={AccordionDialogStyles.radio}
                                  icon={<BpIcon />}
                                  checkedIcon={<BpCheckedIcon />}
                                />
                              }
                              label={<Label>{l}</Label>}
                            />

                            {/* {textfield && selectValue == value ? (
                              <TextField
                                sx={selectListDialogStyles.textField}
                                placeholder={placeholder}
                                inputRef={inputRef}
                                InputProps={{ sx: selectListDialogStyles.textFieldInput }}
                              />
                            ) : null} */}
                          </div>
                        )
                      )}
                      </FormGroup>
                      
                    </AccordionDetails>
                  </Accordion>
                ))
              }

              <Typography variant="subtitle1" style={{ marginTop: 10 }}>
                  {
                    selectedValues.length > 0 ? 
                      <>
                        <div>{selectedValues.length}개가 선택됨</div>
                        <div style={{ fontSize: 12 }}>{selectedValues && selectedValues.reduce((acc, currentValue) => acc + ', ' + currentValue)}</div>
                        <DialogActions sx={dialogStyles.buttonContainer}>
                          <Button
                            onClick={async () => {
                              const result = selectedValues.reduce((acc, currentValue) => acc + ', ' + currentValue);

                              // await handleConfirm(result);

                              handleClose();
                            }}
                            style={dialogStyles.button.black}
                          >
                            {confirmButtonLabel ? confirmButtonLabel : '제출하기'}
                          </Button>
                        </DialogActions>
                      </>
                    : null
                  }
              </Typography>

          </DialogContent>
      </Dialog>
    </div>
  );
};
