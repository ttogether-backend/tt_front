export type InquiryDialogFormValues = {
    title:string;
    content: string;
}

export type SelectListDialogProps = {
    isOpen: boolean;
    isCloseBackgroundClick?: boolean
    handleClose: () => void;
    handleConfirm: (formValues:InquiryDialogFormValues) => any;
  };