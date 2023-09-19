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
            .desc {font-size: 24px;margin-bottom: 16px;opacity: .72;}
            .tit {font-size: 42px;line-height: 1.5;}
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
      font-weight: 600px;
      font-size: 18px;
    }
  }
  .right {
  }
`;


/* radio */
export const Radio = styled.div`
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  flex-wrap: wrap;
  input[type='radio'] {
    display: none;
    &:checked + .radioImg {
      border: 1px solid ${colors.green500};
    }
    &:checked + .radioImg::before {
      background: ${colors.green500};
    }
  }
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .radioImg {
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
export const AccompanyCard = styled.div`
  .user-box {
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
  }
  .card-box {
    border-radius: 10px 10px 0 0;

    .img-box {
      position: relative;

      .state-wrap {
        position: absolute;
        top: 12px;
        left: 12px;
        .category {
        }
        .state {
        }
      }
      .img-wrap {
        height: 272px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
    .content-box {
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
  .state {
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


