import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Page from "../layout";
import { ProfileImage } from "src/shared/components/ProfileImage/ProfileImage";
import { Container, RecordContainer, Title, Explan, RecordListContainer, TabContainer, NonSelectTab, SelectTab } from "./UserRecord.style";
import { ProfileData, comment1, blockUser } from "./dummydata";
import { CommentList, BlockUserList } from "src/components/myfeed/RecordBox";

const UserRecord: React.FC = () => {
  const [tab, setTab] = useState(0); //0은 댓글기록, 1은 차단기록

  return (
    <Page>
      <Container>
        <ProfileImage src={ProfileData[0].profileImage} imageSize="160" />
        <RecordContainer>
          <Title>계정기록</Title>
          <Explan>나의 계정으로 투게더 트래블에서 활동한 내역들입니다.</Explan>
          {tab === 0 ?
          <RecordListContainer>
            <TabContainer>
              <SelectTab>댓글</SelectTab>
              <NonSelectTab onClick={() => setTab(1)}>차단 유저</NonSelectTab>
            </TabContainer>
            <CommentList comments={comment1}/>
          </RecordListContainer>
          :
          <RecordListContainer>
            <TabContainer>
              <NonSelectTab onClick={() => setTab(0)}>댓글</NonSelectTab>
              <SelectTab>차단 유저</SelectTab>
            </TabContainer>
            <BlockUserList blockUsers={blockUser}/>
          </RecordListContainer>
          }
        </RecordContainer>
      </Container>
    </Page>

  );
};

export default UserRecord;