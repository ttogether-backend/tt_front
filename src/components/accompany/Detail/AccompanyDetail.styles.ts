import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1176px;
  margin: 60px auto 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f2f1;
  margin: 40px 0;
`;

export const TagBox = styled.div`
  display: flex;
  margin-bottom: 19px;
`;

interface TagPropsType {
  background?: string;
  color?: string;
}

export const Tag = styled.div<TagPropsType>`
  ${({ background, color }) => `
    background: ${background || 'inherit'};
    color: ${color || 'inherit'};   
`}

  width: fit-content;
  height: 36px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const Title = styled.div`
  width: 623px;
  margin-bottom: 19px;
  color: #30332e;
  font-size: 45px;
  font-weight: 600;
  line-height: 52px;
`;

export const InfoBox = styled.div`
  display: flex;
`;
export const CreatedAt = styled.div`
  color: #73796e;
  font-size: 16px;
  line-height: 24px;
  margin-right: 16px;
`;

export const ViewCount = styled.div`
  color: #73796e;
  font-size: 16px;
  line-height: 24px;
`;

// Status
export const Label = styled.div`
  margin-right: 16px;
  color: #73796e;
  font-size: 16px;
  line-height: 24px;
`;

export const StatusValue = styled.div`
  color: #5bb13d;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const Value = styled.div`
  color: #30332e;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

//Keyword
export const KeywordBox = styled.div`
  width: 816px;
  padding: 30px;
  margin-bottom: 24px;
  background: #f0f9ec;
  border-radius: 10px;
`;

export const KeywordTitle = styled.div`
  margin-bottom: 10px;
  color: #2a511c;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
`;

export const KeywordList = styled.ul`
  padding: 0;
  display: flex;
`;

export const KeywordItem = styled.li`
  padding: 8px 12px;
  list-style: none;
  border-radius: 10px;
  background: #fff;
  color: #30332e;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  :not(:last-child) {
    margin-right: 12px;
  }
`;

//Content
export const ContentImg = styled.img``;

export const ContentText = styled.div`
  margin: 40px 0 87px;
  color: #3f433d;
  font-size: 16px;
  line-height: 24px;
`;

export const AttachmentList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`;

export const FileName = styled.div`
  margin-left: 4px;
  margin-right: 12px;
  color: #696e64;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

export const FileSize = styled.div`
  color: #a1a59e;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

//Comment
export const CommentNoti = styled.div`
  margin-bottom: 20px;
  color: #30332e;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

export const CommentCount = styled.span`
  color: #64c243;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 16px 20px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 1px solid #d4d5d2;
  font-size: 18px;
  font-family: Pretendard;
  resize: none;
  outline: none;

  ::placeholder {
    color: #bfc1bc;
    font-size: 18px;
    line-height: 160%;
  }
`;

export const CommentUser = styled.div`
  display: flex;
  margin-left: 15px;
  margin-right: 4px;
  color: #30332e;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`;

export const CommentContent = styled.div`
  width: 70%;
  margin-bottom: 20px;
  color: #73796e;
  font-size: 16px;
  line-height: 24px;
`;

export const CommentReply = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 4px 12px;
  border-radius: 10px;
  border: 1px solid #f1f2f1;
  background: #f7f7f7;
  color: #696e64;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`;

export const CommentCreatedAt = styled.div`
  margin-left: 40px;
  color: #bfc1bc;
  font-size: 16px;
  line-height: 24px;
`;

//more option modal
export const MoreOptions = styled.ul<{ top: string }>`
  padding: 16px;
  border-radius: 4px;
  background: #f1f2f1;
  font-size: 16px;
  font-weight: 500;
  color: #52564e;
  position: absolute;
  top: ${(props) => props.top};
  right: 0;

  li {
    height: 20px;
    line-height: 24px;

    :first-of-type {
      color: #478a30;
      font-weight: 600;
    }
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
