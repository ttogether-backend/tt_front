import { ClipIcon } from 'src/assets/icon/ClipIcon';
import {
  AttachmentList,
  ContentImg,
  ContentText,
  FileName,
  FileSize,
  KeywordBox,
  KeywordItem,
  KeywordList,
  KeywordTitle,
} from './AccompanyDetail.styles';
import Participant from './AccompanyDetail.Participant';

const Content = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          width: '816px',
        }}
      >
        <KeywordBox>
          <KeywordTitle>이렇게 여행하고 싶어요!</KeywordTitle>

          <KeywordList>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
          </KeywordList>
        </KeywordBox>

        <ContentImg />
        <ContentText>
          대전 처음 가는데 성심당이 유명하다고 해서 가 보려고 하는데 빵을 많이 못 먹어서 나눠 먹으실
          분 구합니다. 빵순이면 완전 좋을 것 같아요 능히 평화스러운 찾아 오아이스도 이 하는 얼음이
          예수는 듣는다. 미인을 가지에 돋고, 군영과 이상이 과실이 칼이다. 뜨고, 바로 일월과
          이것이다. 있는 아름답고 힘차게 청춘의 밥을 넣는 지혜는 속에 생생하며, 것이다. 있는
          생생하며, 과실이 이상, 오아이스도 하여도 있는가? 얼음이 무한한 보내는 이것이다. 얼마나
          튼튼하며, 따뜻한 현저하게 굳세게 때문이다. 심장의 할지라도 것이 뛰노는 사는가 인생에
          타오르고 동산에는 밥을 운다. 옷을 보내는 있는 반짝이는 이상 소담스러운 그들의 이것이다.
          내는 튼튼하며, 이상의 싶이 꽃 지혜는 작고 곳으로 인간의 황금시대다. 생명을 열락의 청춘은
          이것이야말로 바로 인생에 할지니, 뼈 운다. 우는 피어나는 곧 이는 되려니와, 피고, 같이,
          말이다.
        </ContentText>

        <AttachmentList>
          <ClipIcon /> <FileName>첨부파일.pdf</FileName> <FileSize>(254KB)</FileSize>
        </AttachmentList>
      </div>

      <Participant />
    </div>
  );
};

export default Content;
