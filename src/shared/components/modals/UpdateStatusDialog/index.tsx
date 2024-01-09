import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { dialogStyles } from '../common/Dialog.styles';
import { Divider, IconButton, Stack, ToggleButtonGroup, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  UpdateStatusDialogProps,
  UpdateStatusObject,
  accompanyRecruitStatus,
  accompanyStatus,
} from './UpdateStatusDialog.types';
import { CustomButton, CustomToggleGroup } from './UpdateStatusDialog.styles';

export const UpdateStatusDialog: React.FC<UpdateStatusDialogProps> = ({
  isOpen,
  isCloseBackgroundClick,
  currentStatus,
  handleClose,
  handleConfirm,
}) => {
  React.useEffect(() => {
    console.log('ss', currentStatus);
  }, [currentStatus]);

  const canChangeRecruitStatus =
    currentStatus.status == accompanyStatus.COMPLETE ||
    currentStatus.status == accompanyStatus.CANCEL;

  const [updateStatusObject, setUpdateStatusObject] =
    React.useState<UpdateStatusObject>(currentStatus);

  const buttons = {
    [accompanyStatus.CONFIRM]: {
      value: accompanyStatus.CONFIRM,
      label: '동행 확정',
      diabled: false,
    },
    [accompanyStatus.COMPLETE]: {
      value: accompanyStatus.COMPLETE,
      label: '동행 완료',
      diabled: false,
    },
    [accompanyStatus.CANCEL]: {
      value: accompanyStatus.CANCEL,
      label: '동행 취소',
      diabled: false,
    },
  };

  const buttonsByCurrentStatus = {
    [accompanyStatus.READY]: [buttons.CONFIRM, buttons.CANCEL],
    [accompanyStatus.CONFIRM]: [buttons.COMPLETE, buttons.CANCEL],
    [accompanyStatus.COMPLETE]: [
      { ...buttons.COMPLETE, disabled: true },
      { ...buttons.CANCEL, disabled: true },
    ],
    [accompanyStatus.CANCEL]: [
      { ...buttons.COMPLETE, disabled: true },
      { ...buttons.CANCEL, disabled: true },
    ],
  };

  const handleChangeRecruitStatus = (
    event: React.MouseEvent<HTMLElement>,
    newRecruitStatus: string
  ) => {
    console.log({ ...updateStatusObject, recruitStatus: newRecruitStatus });
    setUpdateStatusObject({ ...updateStatusObject, recruitStatus: newRecruitStatus });
  };

  const handleChangeStatus = (event: React.MouseEvent<HTMLElement>, newStatus: string) => {
    console.log({ ...updateStatusObject, recruitStatus: newStatus });
    setUpdateStatusObject({ ...updateStatusObject, status: newStatus });
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: dialogStyles.layoutSmall,
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={dialogStyles.title}>
          <div style={dialogStyles.titleContainer}>
            <div>동행 모집 상태 수정</div>
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
            동행 종료 후에는 모집 상태 변경이 불가능합니다.
          </DialogContentText>
        </DialogContent>

        <DialogContent>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <Typography sx={dialogStyles.subTitle}>동행 모집 상태 변경</Typography>

              <CustomToggleGroup
                value={updateStatusObject.recruitStatus}
                onChange={handleChangeRecruitStatus}
                exclusive
              >
                <CustomButton
                  value={accompanyRecruitStatus.RECRUITING}
                  disabled={canChangeRecruitStatus}
                  selected={currentStatus.recruitStatus === accompanyRecruitStatus.RECRUITING}
                >
                  모집 중
                </CustomButton>
                <CustomButton
                  value={accompanyRecruitStatus.COMPLETE}
                  disabled={canChangeRecruitStatus}
                  selected={currentStatus.recruitStatus === accompanyRecruitStatus.COMPLETE}
                >
                  모집 완료
                </CustomButton>
              </CustomToggleGroup>
            </Stack>
            <Stack></Stack>
            <Stack spacing={2}>
              <Typography sx={dialogStyles.subTitle}>동행 상태 변경</Typography>

              <CustomToggleGroup
                value={updateStatusObject.status}
                onChange={handleChangeStatus}
                exclusive
              >
                {buttonsByCurrentStatus[currentStatus.status ?? accompanyStatus.READY]?.map(
                  (item: any) => {
                    return (
                      <CustomButton
                        value={item?.value}
                        disabled={updateStatusObject.status == item?.value && item?.disabled}
                        key={`status-update-button-${item?.value}`}
                      >
                        {item?.label}
                      </CustomButton>
                    );
                  }
                )}
              </CustomToggleGroup>
            </Stack>
          </Stack>
        </DialogContent>

        <Divider />
        <DialogActions sx={dialogStyles.buttonContainer}>
          <Button
            key={`alert-diloag-button}`}
            onClick={async () => {
              await handleConfirm(updateStatusObject);

              handleClose();
            }}
            style={dialogStyles.button.black}
          >
            저장하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
