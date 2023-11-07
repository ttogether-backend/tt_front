import styled from '@emotion/styled';
import colors from '../../styles/colors';
import DetailPrivacy from './DetailPrivacy';
import { Controller, useForm, DefaultValues, SubmitHandler } from 'react-hook-form';

export const FullPrivacy = styled.div`
  font-size: 16px;
  height: 49px;
  border: 1px solid ${colors.green500};
  display: flex;
  align-content: center;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 21px;

  .fullPrivacyText {
    color: ${colors.green500};
    font-style: bold;
    margin-left: 12.85px;
  }
`;

export const PrivacyPrivacyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailPrivacyDiv = styled.div`
  margin-left: 24.89px;
`;

export type termsType = {
  locationTerms: string;
  serviceTerms: string;
  eventTerms: string;
  privacyTerms: string;
};

const PrivacyJoin = () => {
  const { register, handleSubmit, control, setValue } = useForm<termsType>();

  return (
    <>
      <PrivacyPrivacyDiv>
        <FullPrivacy>
          <input type="checkbox"></input>
          <span className="fullPrivacyText">전체 약관에 동의합니다.</span>
        </FullPrivacy>
        <DetailPrivacyDiv>
          <DetailPrivacy
            {...register(`serviceTerms`)}
            detailPrivacyText={'(필수) 이용약관에 동의합니다.'}
          />
          <DetailPrivacy
            {...register(`privacyTerms`)}
            detailPrivacyText={'(필수) 개인정보 취급방침에 동의합니다.'}
          />
          <DetailPrivacy
            {...register(`locationTerms`)}
            detailPrivacyText={'(선택) 위치 서비스 이용에 동의합니다.'}
          />
          <DetailPrivacy
            {...register(`eventTerms`)}
            detailPrivacyText={'(선택) 이벤트 및 할인 혜택 안내에 동의합니다.'}
          />
        </DetailPrivacyDiv>
      </PrivacyPrivacyDiv>
    </>
  );
};

export default PrivacyJoin;
