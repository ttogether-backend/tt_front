import styled from '@emotion/styled';
import { StyleProps } from './ButtonsImageText.type';

export const LoginBtn = styled.button<StyleProps>`
  position: relative;
  width: 100%;
  height: 52px;
  line-height: 52px;
  margin-bottom: 12px;
  border-radius: 10px;
  transition: .3s ease;
  font-size: 14px;
  font-weight: 600;
  border: none;
  &:hover {
    filter: brightness(0.95);
  }
  a {
    width: 100%;
    height:100%;
    display:block;
  }
  ${(props) => {
    switch(props.sns) {
        case 'kakao' : 
            return `color: #392020; background: #FDE50A url(${props.href}) 20px center no-repeat`;
            break;
        case 'naver' : 
            return `color: #fff; background: #5DC563 url(${props.href}) 20px center no-repeat; `;
            break;
        case 'google' :
            return `color: #191F28; background: #fff url(${props.href}) 20px center no-repeat; border: 1px solid #E5E8EB;`;
            break;
        case 'password' : 
            return `color: #191F28; background: #f7f7f7 url(${props.href}) 20px center no-repeat; `;
            break;

    }

  }}
`;

export const ImageButton = styled.button<StyleProps>`
  background : url(${props => props.href}) no-repeat center;
  background-size : cover;
  width : 100%;
  `;



