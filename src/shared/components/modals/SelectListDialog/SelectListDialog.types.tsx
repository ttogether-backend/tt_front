export type SelectListItem = {
    value: any,
    content: any,
    textfield?:boolean
    placeholder?:string
    textFieldValue?:string
}

export type SelectListDialogProps = {
    title: string; 
    message?: string;
    list: SelectListItem[]; 
    confirmButtonLabel?:string;
    isOpen: boolean;
    isCloseBackgroundClick?: boolean
    handleClose: () => void;
    handleConfirm: (selectItem:SelectListItem) => any;
  };