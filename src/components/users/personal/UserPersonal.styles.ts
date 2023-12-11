import styled from '@emotion/styled';
import colors from '../../../styles/colors';

// profile photo 영역
export const ProfilePhotoBox = styled.div`
  position: relative;
  flex-shrink:0;
`;
// 오른쪽 영역
export const ProfileBox = styled.div`
  margin-bottom: 50px;
  &:last-child {margin-bottom: 0;}
  .txt__wrap {
    margin-bottom: 30px;
    .box__tit {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
    }
    .box__desc {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
export const Box = styled.div`
  border: 1px solid #d4d5d2;
  border-radius: 10px;
  width:100%;
  padding: 30px 40px;
`;
export const InfoItem = styled.div`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .desc {
  }
  
  .info {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #73796e;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    &.gray {
      color: #30332e;
    }
    &.fw600 {
      font-weight: 600;
    }
  }
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
export const Label = styled.div`
  font-size: 22px; font-weight: 600;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const ModifyBtn = styled.button`
 text-decoration: underline;
 padding: 4px;
`;
export const DeleteBtn = styled.button`
  padding-left: 22px;
  color: ${colors.error};
  background: url("/images/icon/icon_delete.png") left center no-repeat;
`;
export const InputBox = styled.div`
  .input__group {
    position: relative;
    margin-bottom: 10px;
    input {
      border: 1px solid ${colors.grey200};
      color: ${colors.grey300};
      font-size: 16px;
      font-weight: 400;
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      background: #fafafa;
    }
    .input__reset {
      display: none;
      width: 48px;
      height: 48px;
      background: url('/images/icon/icon_input_close.svg') center center no-repeat;
      text-indent: -999em;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  button {
    background: #000;
    color: #fff;
    padding: 12px 16px;
    border-radius: 10px;
    float: right;
  }
  .input__close {
    background: #fff;
    color: #000;
    border: 1px solid ${colors.grey200};
    margin-right: 8px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;