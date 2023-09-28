import { SerializedStyles } from '@emotion/react';
export type ProfileImageSize =
  | '17.03'
  | '21.28'
  | '24'
  | '27'
  | '32'
  | '34.06'
  | '36'
  | '40'
  | '46'
  | '64'
  | '160'

export interface ProfileImagePropsType {
  css?: SerializedStyles;
  imageSize: ProfileImageSize;
  src: String | ArrayBuffer | null | undefined;
}
