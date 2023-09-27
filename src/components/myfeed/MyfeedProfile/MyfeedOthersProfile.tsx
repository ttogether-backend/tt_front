import React, { useState, useRef } from "react";
import { css } from "@emotion/react";
import { ProfileImage } from "src/shared/components/ProfileImage/ProfileImage";
import Badges from "src/shared/components/Badges";
import ButtonsText from "src/shared/components/ButtonsText";
import ProfileHorizontal from "src/shared/components/ProfileHorizontal";
import ButtonsIcon from "src/shared/components/ButtonsIcon";
import { OthersProps } from "./MyfeedProfile.type";
import MyfeedMenu from "../MyfeedMenu";
import { Container, IntroContainer, Nickname, NicknameContainer, ProfileContainer, UserIcon, Intro, ButtonContainer, FollowContainer, CountText, FollowText, FollowerContainer, FollowerListText, chatButtonStyle, isChatButtonStyle, followButtonStyle, isFollowButtonStyle, moreIconButtonStyle} from "./MyfeedProfile.style"

const MyfeedOthersProfile: React.FC<OthersProps> = ({profileImage, nickName, accomCount, introduce, followerCount, followingCount, onClickFollower, onClickFollowing, isChat, isFollow, follower=[]}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const styleType = {
    subType: "",
    text: `동행횟수 : ${accomCount}`,
  };

  const nicknames = [];
  const profileImages = [];
  if(follower.length > 0){
    for(let i = 0; i < follower.length; i++){
      nicknames.push(follower[i].nickname);
      profileImages.push(follower[i].profileImage);
    }
  };

  console.log(profileImages);

  const sameFollowerCount = follower.length;



  return (
    <Container isOther={true}>
      <ProfileContainer>
        <ProfileImage src={profileImage} imageSize="160" />
        <IntroContainer>
          <NicknameContainer>
            <Nickname nickName={nickName}>{nickName}</Nickname>
          </NicknameContainer>
          <Badges badgeType="acomCount" subType="" text={`동행횟수 : ${accomCount}`} styleType={styleType} />
          <Intro>{introduce}</Intro>
          {follower.length > 0 &&
            <FollowerContainer>
              <ProfileHorizontal src={profileImages} profileCount={profileImages.length} />
              {nicknames.length === 1 &&
                <FollowerListText>{nicknames[0]}님이 팔로우 중입니다.</FollowerListText> }
              {nicknames.length === 2 &&
                <FollowerListText>{nicknames[0]}님, {nicknames[1]}님이 팔로우 중입니다.</FollowerListText> }
              {nicknames.length === 3 &&
                <FollowerListText>{nicknames[0]}님, {nicknames[1]}님 외 {sameFollowerCount - 2}명이 팔로우 중입니다.</FollowerListText> }
            </FollowerContainer>
          }
            
          <FollowContainer>
            <CountText follower={followerCount}>{followerCount}</CountText>
            <FollowText onClick={onClickFollower}>팔로워</FollowText>
            <CountText follower={followingCount}>{followingCount}</CountText>
            <FollowText onClick={onClickFollowing}>팔로잉</FollowText>
          </FollowContainer>
        </IntroContainer> 
      </ProfileContainer>
      <ButtonContainer>
          {!isChat ? <ButtonsText label="채팅 요청하기" styleType={chatButtonStyle} /> : <ButtonsText label="채팅 요청됨" styleType={isChatButtonStyle} />}
          {!isFollow ? <ButtonsText label="팔로우하기" styleType={followButtonStyle} /> : <ButtonsText label="팔로우중" styleType={isFollowButtonStyle} />}
          <ButtonsIcon icon="moreIcon" styleType={moreIconButtonStyle} onClick={() => {setIsMenuOpen(!isMenuOpen)}} />
          {isMenuOpen && (
            <MyfeedMenu
              menuPositionTop={24}
              menuPositionRight={12}
            />
          )}
        </ButtonContainer>
    </Container>
  );
};

export default MyfeedOthersProfile;