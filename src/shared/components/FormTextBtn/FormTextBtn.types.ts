export interface FormTextBtnPropsType {
  width?: string; // width: 100%일경우??
  height?: string;
  border?: string;
  borderColor?: string;
  fontSize?: number;
  fontWeight?: number;
  padding?: string;
  type?: string;
  autoComplete?: string;
  background?: string;
  placeholder?: string;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onclick?: () => void;
  isLoading?:boolean;
  useLoading?:boolean;
}