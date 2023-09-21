import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MyfeedMyProfile from "src/components/myfeed/MyfeedProfile/MyfeedMyProfile";
import MyfeedOthersProfile from "src/components/myfeed/MyfeedProfile/MyfeedOthersProfile";
import Page from "../layout";
import { ProfileData, sameFollowData, chatState, followState, backImage} from "./dummydata";
import { MyfeedContainer, Wrapper, ChangeImageButtonStyle, AccomRecordTitle, AcoomRecordCardContainer } from "./Myfeed.style";
import ButtonsText from "src/shared/components/ButtonsText";
import MyfeedBackImage from "src/components/myfeed/MyfeedBackImage";
import { css } from "@emotion/react";

const MyfeedPage: React.FC = () => {  
  const { id } = useParams();
  const [isOther, setIsOther] = useState(false);

  useEffect(() => {
    if(id){
      setIsOther(true);
    }
  }, []);

  

  return (
    <Page>
      <Wrapper>
        <MyfeedBackImage alt="배경이미지" src='http://localhost:5173/images/common/img_user_profile_null.png'/>
          
        {!isOther ? 
          <MyfeedContainer>
            <ButtonsText label="배경 수정" styleType={ChangeImageButtonStyle} onClick={() => console.log("배경이미지 변경")}/> 
            <MyfeedMyProfile 
                profileImage={ProfileData[0].profileImage}
                nickName={ProfileData[0].nickname}
                accomCount={ProfileData[0].accomCount}
                introduce={ProfileData[0].introduce}
                followerCount={ProfileData[0].followerCount}
                followingCount={ProfileData[0].followingCount}
                onClickFollower={() => console.log("팔로워 목록")}
                onClickFollowing={() => console.log("팔로잉 목록")}
              />
              <AccomRecordTitle>나의 동행 기록</AccomRecordTitle>
              <AcoomRecordCardContainer/>
          </MyfeedContainer>
          :
          <MyfeedContainer>
              <MyfeedOthersProfile 
                profileImage={ProfileData[0].profileImage}
                nickName={ProfileData[0].nickname}
                accomCount={ProfileData[0].accomCount}
                introduce={ProfileData[0].introduce}
                followerCount={ProfileData[0].followerCount}
                followingCount={ProfileData[0].followingCount}
                onClickFollower={() => console.log("팔로워 목록")}
                onClickFollowing={() => console.log("팔로잉 목록")}
                isChat={chatState[0].isChat}
                isFollow={followState[0].isFollow}
                follower={sameFollowData}
              />
              <AccomRecordTitle>{ProfileData[0].nickname}님의 동행 기록</AccomRecordTitle>
              <AcoomRecordCardContainer/>
            </MyfeedContainer>
          }
      </Wrapper>
    </Page>
  );
}

export default MyfeedPage;
