import styled from '@emotion/styled';

export const LoginItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 454.5px;

  .submitButton {
    width: 100%;
    height: 50px;
    margin-top: 10.73px;
    background-color: #64c243;
    border: transparent;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: Pretendard Variable;
  }

  
`;

export const LoginItemDiv = styled.div`
  font-family: Pretendard Variable;
  width: 454.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .itemName {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: bold;
	text-align: left; 
  }

  .error-text {
    font-size: 14px;
    margin-top: 8px;
    color: red;
  }

  .itemIput {
    font-family: Pretendard Variable;
    height: 49px;
    border-radius: 5px;
    border: 1px solid;
    border-color: #d9d9d9;
    :focus {
      outline: none;
    }

    .placeholder {
      color: #acacb3;
    }
  }
`;

export const LoginTitle = styled.div`
  margin-bottom: 50px;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  font-family: Pretendard;
`;
