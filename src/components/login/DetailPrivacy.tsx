import styled from '@emotion/styled';
import colors from '../../styles/colors';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { css } from '@emotion/react';
import React from 'react';

export type ButtonProps = {
  detailPrivacyText: string; //버튼 안에 들어갈 텍스트
};

export const DetailPrivacyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 405.17px;
  margin-bottom: 10px;
  .checkbox {
    margin-right: 4.28px;
  }
`;

const DetailPrivacy: React.FC<ButtonProps> = ({ detailPrivacyText }) => {
  return (
    <>
      <DetailPrivacyDiv>
        <div>
          <input className="checkbox" type="checkbox"></input>
          {detailPrivacyText}
        </div>
        <ButtonsText
          label={'내용보기'}
          styleType={{
            fontType: '700 12px',
            colorType: 'mainGreen',
            borderRadiusType: 'normal',
            backgroundColorType: 'trans',
            borderColorType: 'mainGreen',
            borderType: 'normal',
            buttonWidth: '74.57px',
            buttonHeight: '24px',
            buttonTextDecorationType: '',
          }}
        ></ButtonsText>
      </DetailPrivacyDiv>
    </>
  );
};

export default DetailPrivacy;
