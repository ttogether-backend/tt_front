import styled from '@emotion/styled';
import ButtonsImageText from '../../shared/components/ButtonsImageText/index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid;
`;

export const LoginWrap = styled.div`
  width: 380px;
  text-align: center;
`;

//로그인-회원가입 타이틀
export const LoginBigText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const LoginInputId = styled.input`
  border: 1px solid #d9d9d9;
  width: auto;
  width: 380px;
  height: 53px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

//회색줄
export const LoginLine = styled.div`
  background-color: #e5e8eb;
  width: 143px;
  height: 1px;
  cursor: pointer;
`;
