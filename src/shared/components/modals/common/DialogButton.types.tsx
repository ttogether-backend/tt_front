export const dialogButtonStyleCode = {
    white :'white',
    black : 'black',
    red : 'red',
    green : 'greed',
    gray : 'gray'
}

export type DialogButtonStyleCodeType = typeof dialogButtonStyleCode[keyof typeof dialogButtonStyleCode];

export type ModalButtonProps = {
    style: DialogButtonStyleCodeType;
    label:string;
    handleClick: () => any;
}