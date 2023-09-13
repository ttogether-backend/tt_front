export const accompanyRecruitStatus = {
    RECRUITING: 'RECRUITING',
    COMPLETE: 'COMPLETE'
}

export type accompanyRecruitStatusType = typeof accompanyRecruitStatus[keyof typeof accompanyRecruitStatus];

export const accompanyStatus = {
    READY: 'READY',
    CONFIRM: 'CONFIRM',
    COMPLETE: 'COMPLETE',
    CANCEL: 'CANCEL'
}

export type accompanyStatusType = typeof accompanyStatus[keyof typeof accompanyStatus];

export type UpdateStatusObject = {
    accompanyId: number;
    status: accompanyStatusType | '';
    recruitStatus: accompanyRecruitStatusType | '';
}

export type UpdateStatusDialogProps = {
    isOpen: boolean;
    isCloseBackgroundClick?: boolean;
    currentStatus: UpdateStatusObject;
    handleClose: () => void;
    handleConfirm: (updateStatusObject:UpdateStatusObject) => any
  };