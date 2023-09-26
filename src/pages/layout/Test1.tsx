import { FC } from 'react';
import { CustomDatepicker } from '../../shared/components/Datepicker/Datepicker.tsx';
import { ProfileSquare } from '../../shared/components/ProfileSqure/ProfileSquare.tsx';

export const Test1:FC = () => {
  return <><CustomDatepicker /><ProfileSquare profileCount={1} src={[
    'src/shared/components/ProfileSqure/Rectangle6280.svg',
  ]} /><ProfileSquare profileCount={2} src={[
    'src/shared/components/ProfileSqure/Component1.svg',
    'src/shared/components/ProfileSqure/Ellipse498.svg',
  ]} /><ProfileSquare profileCount={3} src={[
    'src/shared/components/ProfileSqure/Rectangle6280.svg',
    'src/shared/components/ProfileSqure/Rectangle6281.svg',
    'src/shared/components/ProfileSqure/img.png',
  ]} /><ProfileSquare profileCount={4} src={[
    'src/shared/components/ProfileSqure/Component1.svg',
    'src/shared/components/ProfileSqure/Ellipse498.svg',
    'src/shared/components/ProfileSqure/img.png',
    'src/shared/components/ProfileSqure/Component1.svg',
  ]} /></>
}