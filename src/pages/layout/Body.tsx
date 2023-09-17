import { FC, /*useState*/ } from 'react';
// import { CustomDatepicker } from 'src/shared/components/Datepicker/Datepicker.tsx';
// import { ProfileImage } from 'src/shared/components/ProfileImage/ProfileImage.tsx';
// import { ProfileSquare } from '../../shared/components/ProfileSqure/ProfileSquare.tsx';

export const Body:FC = () => {

  // const [srcState, setSrcState] = useState<String | ArrayBuffer | null>();
  // const onFileChange = () => {
  //   // @ts-ignore
  //   const inputFile:File = document.getElementById("myfileinput").files[0];
  //   setSrcState(URL.createObjectURL(inputFile));
  // }
  // @ts-ignore
  return <div>
    {/*<CustomDatepicker/>*/}
    {/*<input id={'myfileinput'} type={'file'} onChange={onFileChange}></input>*/}
    {/*<ProfileImage src={srcState ? srcState : 'src/shared/components/ProfileSqure/img.png'} hasBorder={false} imageSize={'27'} />*/}
    {/*<ProfileSquare profileCount={2} src={['src/shared/components/ProfileSqure/Component1.svg', 'src/shared/components/ProfileSqure/Ellipse498.svg']}/>*/}
  </div>
}