import { SerializedStyles } from '@emotion/react';


export interface ProfileHorizontalPropsType {
  css?: SerializedStyles;
  profileCount : number, //1 , 2 , 3 최대 3개 최소 하나
  src: String[] | ArrayBuffer[] | null | undefined;
}