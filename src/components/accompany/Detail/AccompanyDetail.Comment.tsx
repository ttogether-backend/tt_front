import { ProfileImage } from 'src/shared/components/ProfileImage/ProfileImage';
import {
  CommentContent,
  CommentCount,
  CommentCreatedAt,
  CommentInput,
  CommentNoti,
  CommentReply,
  CommentUser,
  MoreOptions,
  Wrapper,
} from './AccompanyDetail.styles';
import { MoreIcon } from 'src/assets/icon/MoreIcon';
import { BentArrowIcon } from 'src/assets/icon/BentArrowIcon';
import AuthBadgeIcon from 'src/assets/icon/AuthBadgeIcon';

const Comment = () => {
  return (
    <Wrapper>
      <CommentNoti>
        <CommentCount>3</CommentCount>개의 댓글이 있습니다.
      </CommentNoti>
      <CommentInput placeholder="댓글을 입력하세요."></CommentInput>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ProfileImage imageSize="46" src="/src/assets/cardDummy.png" />
          <CommentUser>
            김행성 <AuthBadgeIcon.Green style={{ marginLeft: '4px' }} />
          </CommentUser>
          <CommentCreatedAt>2023.05.17</CommentCreatedAt>
        </div>

        <MoreIcon size={40} />
        <MoreOptions top={'44px'}>
          <li>1:1 채팅하기</li>
          <li>신고</li>
        </MoreOptions>
      </div>

      <CommentContent>
        대전 처음 가는데 성심당이 유명하다고 해서 가 보려고 하는데 빵을 많이 못 먹어서 나눠 먹으실
        분 구합니다. 그들의 이것을 못할 위하여서, 되는 것이다. 되는 우리 천자만홍이 품으며, 목숨이
        이것이다.
      </CommentContent>

      <CommentReply>
        <BentArrowIcon
          style={{
            marginRight: '8px',
          }}
        />
        <div>답글 달기</div>
      </CommentReply>
    </Wrapper>
  );
};

export default Comment;
