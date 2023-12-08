export type AccordionItem = {
  value: number,
  title: string,
  content: string[]
}

export type AccordionDialogProps = {
  title: string; 
  message?: string;
  list: AccordionItem[]; 
  confirmButtonLabel?:string;
  isOpen: boolean;
  isCloseBackgroundClick?: boolean
  handleClose: () => void;
  handleConfirm: () => void;
};