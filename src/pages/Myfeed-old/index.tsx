import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MyfeedMyProfile from "src/components/myfeed/MyfeedProfile/MyfeedMyProfile";
import MyfeedOthersProfile from "src/components/myfeed/MyfeedProfile/MyfeedOthersProfile";
import {NonNavbarPage} from "../layout";
import { ProfileData, sameFollowData, chatState, followState, backImage, AccompanyCardProp} from "./dummydata";
import { MyfeedContainer, Wrapper, ChangeImageButtonStyle, AccomRecordTitle, AcoomRecordCardContainer, BackImageChangeDiv} from "./Myfeed.style";
import ButtonsText from "src/shared/components/ButtonsText";
import MyfeedBackImage from "src/components/myfeed/MyfeedBackImage";
import { AccompanyCard } from "src/shared/components/AccompanyCard";
import { AccompanyCardProps } from "src/shared/components/AccompanyCard/AccompanyCard.types";



const MyfeedPage: React.FC = () => {  
  const { id } = useParams();
  const [isOther, setIsOther] = useState(false);
  const [backImage, setBackImage] = useState<string>(`${import.meta.env.VITE_PUBLIC}/images/common/Default_back.png`);
  const [imageInput, setImageInput] = useState(false);
  const [accompanyRecords, setAccompanyRecords] = useState<AccompanyCardProps[]>([]);

  // const records = [
  //   AccompanyCardProp,AccompanyCardProp,AccompanyCardProp,AccompanyCardProp,AccompanyCardProp,AccompanyCardProp];


  useEffect(() => {
    if(id){
      setIsOther(true);
    }
    // setAccompanyRecords(records);
  }, []);

  const ChangeBackImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setBackImage(reader.result as string);
        setImageInput(false);
      }
    }
  }



  return (
    <NonNavbarPage>
      <Wrapper>
        <MyfeedBackImage alt="배경이미지" src={backImage}/>
          
        {!isOther ? 
          <MyfeedContainer>
            <ButtonsText label="배경 수정" styleType={ChangeImageButtonStyle} onClick={() =>setImageInput(!imageInput)}/> 
            {imageInput &&
              <BackImageChangeDiv>
                <input id="fileInput" type="file" accept="image/*" onChange={ChangeBackImage}/>
                </BackImageChangeDiv>}
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
              <AcoomRecordCardContainer>
                {accompanyRecords.length === 0 && <div>동행 기록이 없습니다.</div>}
                {accompanyRecords.map((record, id) => (
                  <AccompanyCard key={id} {...record}/>
                ))}
              </AcoomRecordCardContainer>
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
    </NonNavbarPage>
  );
}

export default MyfeedPage;
