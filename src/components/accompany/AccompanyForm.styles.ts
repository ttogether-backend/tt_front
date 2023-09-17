import styled from '@emotion/styled';

export const Box = styled.div`
  margin-bottom: 40px;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-bottom: 8px;
  text-align: center;
  border-radius: 100%;
  background: #64c243;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
`;

export const SectionTitle = styled.div`
  margin-bottom: 50px;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 150%;
  font-family: Pretendard;
`;

export const Label = styled.div`
  margin-bottom: 16px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.div`
  width: 100%;
  height: 50px;
  padding: 18px 0;
  border-radius: 10px;
  border: 1px solid #d4d5d2;
  text-align: center;
  font-size: 18px;
  line-height: 14px;
  letter-spacing: 0.159px;
  color: #8a9684;
  background: #f1f2f1;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const PlaceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ResultInput = styled.input`
  width: 70%;
  height: 50px;
  padding: 18px 6px;
  border-radius: 10px;
  border: 1px solid #d4d5d2;
  font-size: 18px;
  background: #f1f2f1;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.div`
  width: 30%;
  height: 50px;
  padding: 11px 24px;
  margin-left: 16px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  line-height: 150%;
  color: #fff;
  background: #000;
  cursor: pointer;
`;
