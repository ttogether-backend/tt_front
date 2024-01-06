import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const VerificareBoxWrap = styled.div`
  width: 380px;
  margin: 78px auto 160px;
  .txt__wrap {
    text-align: center;
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
  .btn__wrap {
    width: 100%;
  }
`;
export const VerificareBtn = styled.button<{ name: string }>`
  width: 100%;
  height: 52px;
  line-height: 52px;
  margin-bottom: 12px;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 14px;
  font-weight: 600;
  outline: none !important;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.95);
  }
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
  ${(props) => {
    switch (props.name) {
      case 'kakao':
        return `color: #392020; background: #FDE50A url("/images/icon/icon_kakao.png") 20px center no-repeat; `;
        break;
      case 'naver':
        return `color: #fff; background: #5DC563 url("/images/icon/icon_naver.png") 20px center no-repeat; `;
        break;
      case 'google':
        return `color: #191F28; background: #fff url("/images/icon/icon_google.png") 20px center no-repeat; border: 1px solid #E5E8EB;`;
        break;
      case 'password':
        return `color: #191F28; background: ${colors.greylight} url("/images/icon/icon_private.png") 20px center no-repeat; `;
        break;
    }
  }}
`;

export const Desc = styled.p<{ status: string }>`
  font-size: 12px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  ${(props) => {
    if (props.status === 'success') return `color: ${colors.success}`;
    else if (props.status === 'error') return `color: ${colors.error2}`;
    else return `color: ${colors.grey300}`;
  }}
`;

export const LoginItemDiv = styled.div`
	font-family: Pretendard Variable;
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	
	.error-text {
		font-size: 14px;
		margin-top: 8px;
		color: red;
	}

	.itemIput {
		font-family: Pretendard Variable;
		height: 49px;
		border-radius: 10px;
		border: 1px solid;
		border-color: #d9d9d9;
		padding-left: 10px;
		:focus {
			outline: none;
		}
	}

    .placeholder {
		margin: 1rem;
		color: #acacb3;
    }
	
	.kakaoLogin {
		width: 100%;
		height: 50px;
		margin-top: 10.73px;
		background-color: #FDE50A;
		border: transparent;
		border-radius: 10px;
		color: #392020;
		font-weight: bold;
		font-family: Pretendard Variable;
	}

	.naverLogin {
		width: 100%;
		height: 50px;
		margin-top: 10.73px;
		background-color: #5DC563;
		border: transparent;
		border-radius: 10px;
		color: #392020;
		font-weight: bold;
		font-family: Pretendard Variable;
	}

	.googleLogin {
		width: 100%;
		height: 50px;
		margin-top: 10.73px;
		background-color: #FFFFFF;
		border: 1px solid #E5E8EB;
		border-radius: 10px;
		color: #392020;
		font-weight: bold;
		font-family: Pretendard Variable;
	}

	.hr-sect {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: #43444A;
        font-size: 16px;
        margin: 8px 0px;
      }
      .hr-sect::before,
      .hr-sect::after {
        content: "";
        flex-grow: 1;
        background: rgba(0, 0, 0, 0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
      }
  }
`;