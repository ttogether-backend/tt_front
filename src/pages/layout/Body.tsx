import { FC } from 'react';
import { CustomDatepicker } from 'src/shared/components/Datepicker/Datepicker.tsx';
import { ProfileSquare } from '../../shared/components/ProfileSqure/ProfileSquare.tsx';

export const Body:FC = () => {

  // @ts-ignore
  return <div>
    <CustomDatepicker/>
    <ProfileSquare profileCount={1} src={['src/shared/components/ProfileSqure/img.png']} />
    <ProfileSquare profileCount={2} src={['src/shared/components/ProfileSqure/Component1.svg', 'src/shared/components/ProfileSqure/Ellipse498.svg']}/>
    <ProfileSquare profileCount={3} src={['src/shared/components/ProfileSqure/Component1.svg', 'src/shared/components/ProfileSqure/Ellipse498.svg', 'src/shared/components/ProfileSqure/img.png']}/>
  </div>
}