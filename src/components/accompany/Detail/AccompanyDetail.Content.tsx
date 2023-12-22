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
import DOMPurify from 'dompurify';

const Content = ({ content }) => {
  const sanitizedHtml = DOMPurify.sanitize(content);

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
        {/* <KeywordBox>
          <KeywordTitle>이렇게 여행하고 싶어요!</KeywordTitle>

          <KeywordList>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
            <KeywordItem>느긋한 여행</KeywordItem>
          </KeywordList>
        </KeywordBox> */}

        <ContentImg />
        <ContentText>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </ContentText>
        {/* 
        <AttachmentList>
          <ClipIcon /> <FileName>첨부파일.pdf</FileName> <FileSize>(254KB)</FileSize>
        </AttachmentList> */}
      </div>
    </div>
  );
};

export default Content;
