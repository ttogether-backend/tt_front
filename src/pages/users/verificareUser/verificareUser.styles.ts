import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const VerificareBoxWrap = styled.div`
  width: 380px;
  margin: 78px auto 160px;
  .txt__wrap {
    text-align:center;
    margin-bottom: 36px;
    .box__tit {
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: 700;
    }
    .box__desc {
      color: #969696;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .btn__wrap {width: 100%;}
`;
export const VerificareBtn = styled.button<{ name: string }>`
  width: 100%;
  height: 52px;
  line-height: 52px;
  margin-bottom: 12px;
  border-radius: 10px;
  transition: .3s ease;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    filter: brightness(0.95);
  }
  a {
    width: 100%;
    height:100%;
    display:block;
  }
  ${(props) => {
    switch(props.name) {
        case 'kakao' : 
            return `color: #392020; background: #FDE50A url("/images/icon/icon_kakao.png") 20px center no-repeat; `;
            break;
        case 'naver' : 
            return `color: #fff; background: #5DC563 url("/images/icon/icon_naver.png") 20px center no-repeat; `;
            break;
        case 'google' :
            return `color: #191F28; background: #fff url("/images/icon/icon_google.png") 20px center no-repeat; border: 1px solid #E5E8EB;`;
            break;
        case 'password' : 
            return `color: #191F28; background: ${colors.greylight} url("/images/icon/icon_private.png") 20px center no-repeat; `;
            break;

    }

  }}
`;