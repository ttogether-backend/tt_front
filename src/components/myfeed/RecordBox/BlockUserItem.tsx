import React, {useState} from "react";
import ButtonsText from "src/shared/components/ButtonsText";
import { Container, BlockCancelButtonStyle, UserNickname, UserTextContainer, UserInfoContainer, UserIntro } from "./BlockUserItem.style";
import { ProfileImage } from "src/shared/components/ProfileImage/ProfileImage";

const BlockUserItem: React.FC<{id:string, profileImage:string, nickname:string, intro:string}> = ({id, profileImage, nickname, intro}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <UserInfoContainer>
        <ProfileImage src={profileImage} imageSize="36" />
        <UserTextContainer>
          <UserNickname>{nickname}</UserNickname>
          <UserIntro>{intro}</UserIntro>
        </UserTextContainer>
      </UserInfoContainer>
      <ButtonsText label="차단중" styleType={BlockCancelButtonStyle} onClick={() => {setIsModalOpen(true)}}/>
      {isModalOpen &&
        <div>차단해제 모달</div>
      }
    </Container>
  )
}

export default BlockUserItem;