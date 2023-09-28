import { MoreIcon } from 'src/assets/icon/MoreIcon';
import {
  CreatedAt,
  InfoBox,
  MoreOptions,
  Tag,
  TagBox,
  Title,
  ViewCount,
} from './AccompanyDetail.styles';

const Header = () => {
  return (
    <>
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <div>
          <TagBox>
            <Tag background="#5bb13d" color="#fff">
              맛집
            </Tag>
            <Tag background="#f0f9ec" color="#376b25">
              모집 중
            </Tag>
          </TagBox>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Title>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사</Title>
            <MoreIcon />
            <MoreOptions top={'56px'}>
              <li>동행 모집 상태 변경</li>
              <li>수정</li>
              <li>삭제</li>
            </MoreOptions>
          </div>

          <InfoBox>
            <CreatedAt>2023.05.17</CreatedAt>
            <ViewCount>조회수 345</ViewCount>
          </InfoBox>
        </div>
      </div>
    </>
  );
};

export default Header;
