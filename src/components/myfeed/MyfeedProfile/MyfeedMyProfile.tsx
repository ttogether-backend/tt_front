import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ProfileImage } from "src/shared/components/ProfileImage/ProfileImage";
import Badges from "src/shared/components/Badges";
import ButtonsText from "src/shared/components/ButtonsText";
import { MyProps } from "./MyfeedProfile.type";
import { Container, IntroContainer, Nickname, NicknameContainer, ProfileContainer, UserIcon, Intro, ButtonContainer, FollowContainer, CountText, FollowText } from "./MyfeedProfile.style"

const MyfeedMyProfile: React.FC<MyProps> = ({profileImage, nickName, accomCount, introduce, followerCount, followingCount, onClickFollower, onClickFollowing}) => {
  const styleType = {
    subType: "",
    text: `동행횟수 : ${accomCount}`,
  };

  const recordButtonStyle = {
    fontType: "600 14px",
    buttonWidth: "84px",
    buttonHeight: "44px",
    colorType: "black",
    borderRadiusType: "little",
    backgroundColorType: "lightGrey",
    borderType: "none",
    buttonTextDecorationType: "none",
    borderColorType: "none",
    buttonMargin: "0 10px 0 0",
  };

  const editButtonStyle = {
    fontType: "600 14px",
    buttonWidth: "96px",
    buttonHeight: "44px",
    colorType: "black",
    borderRadiusType: "little",
    backgroundColorType: "lightGrey",
    borderType: "none",
    buttonTextDecorationType: "none",
    borderColorType: "none",
  };

  const onClickRecord = () => {
    console.log("계정기록");
  }

  const onClickEdit = () => {
    console.log("프로필 수정");
  }

  return (
    <Container isOther={false}>
      <ProfileContainer>
        <ProfileImage src={profileImage} imageSize="160" />
        <IntroContainer>
          <NicknameContainer>
            <Nickname nickName={nickName}>{nickName}</Nickname>
          </NicknameContainer>
          <Badges badgeType="acomCount" subType="" text={`동행횟수 : ${accomCount}`} styleType={styleType} />
          <Intro>{introduce}</Intro>
          <FollowContainer>
            <CountText follower={followerCount}>{followerCount}</CountText>
            <FollowText onClick={onClickFollower}>팔로워</FollowText>
            <CountText follower={followingCount}>{followingCount}</CountText>
            <FollowText onClick={onClickFollowing}>팔로잉</FollowText>
          </FollowContainer>
        </IntroContainer>
      </ProfileContainer>
      <ButtonContainer>
        <Link to="/myfeed/user/record" >
          <ButtonsText label="계정기록" styleType={recordButtonStyle} onClick={onClickRecord}/>
        </Link>
        <ButtonsText label="프로필 수정" styleType={editButtonStyle} onClick={onClickEdit} />
      </ButtonContainer>
    </Container>
  );
};

export default MyfeedMyProfile;