import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { SignUpWrap } from './SignUpPage.style';
import SignUpItem from './SignUpItem';
import Page from 'src/pages/layout';

//사용예시
// const userStyle1: ButtonStyleType = {
//   fontType: '700 18px',
//   borderRadiusType: 'type 2',
//   backgroundColorType: 'type 2',
//   borderType: 'type 2',
//    ...
// };
// ...
// <Button label="Styled Button 1" styleType={userStyle1} />

const SignUpPage = () => {
  return (
    <Page>
		<div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
		<SignUpWrap>
		<SignUpItem />
		</SignUpWrap>
	  </div>
    </Page>
  );
};

export default SignUpPage;
