import { Dispatch, SetStateAction } from 'react';

export interface EditorPropsType {
  initValue: string;
  handleValue: (string) => void;
}
