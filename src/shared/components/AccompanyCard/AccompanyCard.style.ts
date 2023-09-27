import colors from '../../../styles/colors';
import styled from '@emotion/styled';
// import { AccompanyCardStyleType } from './AccompanyCard.types';

export const AccompanyCard = styled.div`
    &:hover {
        .img-box img {
            transform: scale(1.1);
            z-index: 0;
        }
    }
`;


export const UserBox = styled.div`
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    .img {
        width: 40px;
        height: 40px;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        }
        margin-right: 20px;
    }
    .username {
        margin-right: 8px;
        color: #1d1b20;
    }
    .age {
        color: #727272;
    }
    }
`;

export const CardBox = styled.div`
  border-radius: 10px 10px 0 0;
  width: 448px;
  overflow: hidden;
  .img-box {
    position: relative;

    .state-wrap {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index:2;
      .category {
      }
      .status {
      }
    }
    .img-wrap {
      height: 272px;
      z-index:0;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s ease;
      }
    }
    .accompany-info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #191a1c;
      padding: 12px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      font-size: 16px;
      .date {
        display: flex;
        span {
          color: ${colors.green500};
          margin-left: 10px;
        }
      }
      .personnel-wrap {
        .personnel {
          color: #a5a5a5;
        }
      }
    }
  }
`;

export const ContentBox = styled.div`
    background: ${colors.grey50};
    border: 1px solid ${colors.grey100};
    border-radius: 0 0 10px 10px;
    padding: 16px 24px 20px;
    .tit {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    color: #495056;
    margin-bottom: 4px;
    }
    .location {
    padding-left: 28px;
    position: relative;
    color: #52564e;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    &::before {
        content: '';
        width: 24px;
        height: 24px;
        background: url('/images/icon/icon_location_on.svg') center center no-repeat;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
    }
    }
    .tags {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    .tag {
        padding: 8px 12px;
        font-weight: 700;
        border-radius: 10px;
        background: #fff;
    }
    }

`;
export const AccompanyState = styled.div<{ name: string }>`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  z-index: 2;
  .category {
    padding: 8px 16px;
    color: #fff;
    ${(props) => {
      switch (props.name) {
        case 'eat':
          return 'background: #D97736;';
          break;
        case 'culture':
          return 'background: #79A3A5;';
          break;
        case 'trip':
          return 'background: #5BB13D;';
          break;
        default:
          return 'background: #FDE50A;';
      }
    }}
  }
  .status {
    padding: 8px 16px;
    background: ${colors.green50};
    color: ${colors.green800};
  }
`;

export const Auth = styled.div<{ authNum: number }>`
  position: relative;
  padding-left: 28px;
  line-height: 24px;
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    left: 0;
    -webkit-mask: url('/images/icon/icon_user_verified.svg') no-repeat center;
    mask: url('/images/icon/icon_user_verified.svg') no-repeat center;
    ${(props) => {
      switch (props.authNum) {
        case 1:
          return `background-color: #699DEB`;
          break;
        case 2:
          return `background-color: ${colors.green700}`;
          break;
        default:
          return `background-color: ${colors.grey100}`;
      }
    }}
  }
`;

