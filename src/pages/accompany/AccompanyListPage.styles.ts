import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 1408px;
  margin: 0 auto;
`;

export const AccompanyBanner = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    .banner {
        position: relative;
        .txt-wrap {
            position: absolute;
            top: 74px; left: 74px;
            color: #fff;
            .desc {font-size: 24px;margin-bottom: 16px;opacity: .72;font-weight:600;}
            .tit {font-size: 42px;line-height: 1.5;font-weight:700;}
        }
        .img-wrap {
            width:100%;
            height:100%;
            object-fit:cover;
        } 
    }

`;

export const AccompanyFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 16px;
  background: ${colors.grey50};
  margin-bottom: 40px;
  .filter-item {
    cursor: pointer;
    label {
      cursor: pointer;
    }
  }
  .left {
    display: flex;
    gap: 20px;
    .filter-item {
      border-radius: 10px;
      padding: 8px 24px;
      background-color: #fff;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .right {
  }
`;


/* radio */
export const Checkbox = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  flex-wrap: wrap;
  input[type='checkbox'] {
    display: none;
    &:checked + .checkImg {
      border: 1px solid ${colors.green500};
    }
    &:checked + .checkImg::before {
      background: ${colors.green500};
    }
  }
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .checkImg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid ${colors.grey100};
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      &::before {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    }
  }
`;
export const AccompanyList = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 40px 32px;
  padding-bottom: 172px;
`;

