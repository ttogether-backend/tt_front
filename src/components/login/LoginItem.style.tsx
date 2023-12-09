import styled from '@emotion/styled';

export const LoginItemWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 454.5px;
	margin-bottom: 3rem;

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



export const LoginTitle = styled.div`
	margin-bottom: 50px;
	color: #000;
	font-size: 32px;
	font-weight: 700;
	line-height: 150%;
	font-family: Pretendard;
`;

export const ExtraButton = styled.div`
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	display: flex;
	justify-content: space-between;
`;