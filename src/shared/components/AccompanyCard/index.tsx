import React from 'react';
import { AccompanyCardProps } from './AccompanyCard.types';
import * as Style from './AccompanyCard.style';
import { Link } from 'react-router-dom';

export const AccompanyCard: React.FC<AccompanyCardProps> = (
  props: React.PropsWithChildren<AccompanyCardProps>
) => {
  return (
    <Style.AccompanyCard>
      <Link to="">
        <Style.UserBox>
          <div className="profile">
            <div className="img">
              <img src={props.profileImgSrc} alt="" />
            </div>
            <div className="username">{props.username}</div>
            <div className="age">{props.age}</div>
          </div>
          <Style.Auth authNum={props.authNum}>{props.auth}</Style.Auth>
        </Style.UserBox>
        <Style.CardBox>
          <div className="img-box">
            <Style.AccompanyState name="eat">
              <div className="category">{props.category}</div>
              <div className="status">{props.status}</div>
            </Style.AccompanyState>
            <div className="img-wrap">
              <img src={props.thumbSrc} alt="" />
            </div>
            <div className="accompany-info">
              <div className="date">
                동행일자
                <span>{props.date}</span>
              </div>
              <div className="personnel-wrap">
                <span className="cnt">{props.cnt}명</span> / <span className="personnel">{props.personnel}명</span>
              </div>
            </div>
          </div>
          <Style.ContentBox>
            <div className="tit">{props.title}</div>
            <div className="location">{props.location}</div>
            <div className="tags">
              {props.tags.map((tag, id) => (
                <div className="tag" key={id}>
                  {tag}
                </div>
              ))}
            </div>
          </Style.ContentBox>
        </Style.CardBox>
      </Link>
    </Style.AccompanyCard>
  );
};


AccompanyCard.defaultProps = {
};