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

const Header = ({ title, category, recruit_status, view_count }) => {
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
              {category}
            </Tag>
            <Tag background="#f0f9ec" color="#376b25">
              {recruit_status}
            </Tag>
          </TagBox>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Title> {title} </Title>
            <MoreIcon />
            <MoreOptions top={'56px'}>
              <li>동행 모집 상태 변경</li>
              <li>수정</li>
              <li>삭제</li>
            </MoreOptions>
          </div>

          <InfoBox>
            <CreatedAt>2023.05.17</CreatedAt>
            <ViewCount>조회수 {view_count}</ViewCount>
          </InfoBox>
        </div>
      </div>
    </>
  );
};

export default Header;
