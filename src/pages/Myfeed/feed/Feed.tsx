import { ListContainerItem } from '../layout/ListContainer';
import { useEffect, useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';
import { getCookie } from 'src/components/login/cookie';
import { getProfile } from './profileApi';
import { AccompanyCard } from 'src/shared/components/AccompanyCard';
import { VerticalScrollContainer } from '../layout/VerticalScrollContainer';
import { AccompanyCardProps } from 'src/shared/components/AccompanyCard/AccompanyCard.types';
import { Badge } from '../components/Badge';
import { FeedBackground } from '../components/FeedBackground';
import { FlexContainer } from '../layout/FlexContainer';

interface FeedProps {
  userId?: string;
}

interface ProfileCardProps {
  isMyFeed: boolean;
  profileImagePath: string;
  nickname: string;
  bio: string;
  accompanyComplteCount: number;
}

const data = {
  category: 'TRAVEL',
  title: '뚜기와 함께하는 여행',
  accompany_id: 1,
  thumbnail_url:
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbK77rj%2FbtrDyF4hWX8%2FlPMPnDbvxPv4sWpdGZ3bhK%2Fimg.jpg',
  recruit_number: 1,
  is_age_free: false,
  min_recruit_age: 20,
  max_recruit_age: 30,
  location_info_list: [
    {
      location_id: 3,
      country: 'korea',
      city: 'seoul',
      latitude: '12354',
      longitude: '4897',
      name: '오뚜기',
      address: '서울시양천구',
    },
  ],
  add_content: '밥 먹고싶어요',
  host: {
    member_id: 'test',
    nickname: 'test',
    profile_image_path: 'test',
  },
  joining_member_count: 1,
  period: {
    startAt: '2022-11-22',
    endAt: '2022-11-22',
  },
  recruit_age_range: {
    minRecruitAge: 10,
    maxRecruitAge: 20,
  },
  status: 'COMPLETE',
};

const ProfileCard = ({
  isMyFeed,
  profileImagePath,
  nickname,
  bio,
  accompanyComplteCount,
}: ProfileCardProps) => {
  const navigate = useNavigate();

  return (
    <FlexContainer
      border={true}
      direction="row"
      justifyContent="space-between"
      gap={100}
      style={{ padding: '32px', background: '#fff' }}
    >
      <FlexContainer direction="row" gap={40}>
        <ProfileImage src={profileImagePath} size={160} />
        <FlexContainer direction="column" gap={12}>
          <Text fontType={Text.FontType.title}>{nickname}</Text>
          <Badge>동행횟수 : {accompanyComplteCount}</Badge>
          <Text fontType={Text.FontType.description} align={Text.FontAlignType.right}>
            {bio}
          </Text>
        </FlexContainer>
      </FlexContainer>

      {isMyFeed ? (
        <FlexContainer direction="row" gap={10}>
          <Button style={{ width: 84, height: 44 }}>배경수정</Button>
          <Button
            style={{ width: 84, height: 44 }}
            onClick={() => {
              navigate('/users/personal');
            }}
          >
            정보 수정
          </Button>
        </FlexContainer>
      ) : (
        <FlexContainer direction="column">
          <Button style={{ width: 84, height: 44 }}>1:1 채팅</Button>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

interface FeedContentProps {
  title: string;
  moreContentLinkPath: string;
  contentDatas: AccompanyCardProps[];
}

const FeedContent = ({ title, moreContentLinkPath, contentDatas }: FeedContentProps) => {
  return (
    <FlexContainer direction="column" gap={24}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fontType={Text.FontType.subTitle}>{title}</Text>
        <Button>더보기</Button>
      </div>

      <VerticalScrollContainer>
        <AccompanyCard
          key={1}
          isAccomList={true}
          accomId={data.accompany_id}
          memberId={data.host.member_id}
          authNum={1}
          auth="1차 인증"
          profileImgSrc={data.host.profile_image_path}
          username={data.host.nickname}
          age={`${data.recruit_age_range.minRecruitAge}대 ~ ${data.recruit_age_range.maxRecruitAge}대`}
          thumbSrc={data.thumbnail_url}
          category={data.category}
          status={data.status}
          date={`${data.period.startAt} ~ ${data.period.endAt}`}
          cnt={data.joining_member_count}
          personnel={data.recruit_number}
          title={data.title}
          location={data.location_info_list[0].name}
          tags={[]}
        />
        <AccompanyCard
          key={1}
          isAccomList={true}
          accomId={data.accompany_id}
          memberId={data.host.member_id}
          authNum={1}
          auth="1차 인증"
          profileImgSrc={data.host.profile_image_path}
          username={data.host.nickname}
          age={`${data.recruit_age_range.minRecruitAge}대 ~ ${data.recruit_age_range.maxRecruitAge}대`}
          thumbSrc={data.thumbnail_url}
          category={data.category}
          status={data.status}
          date={`${data.period.startAt} ~ ${data.period.endAt}`}
          cnt={data.joining_member_count}
          personnel={data.recruit_number}
          title={data.title}
          location={data.location_info_list[0].name}
          tags={[]}
        />
        <AccompanyCard
          key={1}
          isAccomList={true}
          accomId={data.accompany_id}
          memberId={data.host.member_id}
          authNum={1}
          auth="1차 인증"
          profileImgSrc={data.host.profile_image_path}
          username={data.host.nickname}
          age={`${data.recruit_age_range.minRecruitAge}대 ~ ${data.recruit_age_range.maxRecruitAge}대`}
          thumbSrc={data.thumbnail_url}
          category={data.category}
          status={data.status}
          date={`${data.period.startAt} ~ ${data.period.endAt}`}
          cnt={data.joining_member_count}
          personnel={data.recruit_number}
          title={data.title}
          location={data.location_info_list[0].name}
          tags={[]}
        />
      </VerticalScrollContainer>
    </FlexContainer>
  );
};

const Feed = ({ userId }: FeedProps) => {
  const [datas, setDatas] = useState<any>(null);

  useEffect(() => {
    if (userId) {
      (async function () {
        const result = await getProfile(userId);
        setDatas(result.data);
      })();
    } else {
      (async function () {
        const result = await getProfile(getCookie('memberId'));
        setDatas(result.data);
      })();
    }
  }, [userId]);

  return (
    <>
      <FeedBackground src={datas?.myfeed_image_path} />

      <FlexContainer
        direction="column"
        gap={40}
        width={'1048px'}
        style={{ marginTop: userId ? 144 : 0, marginBottom: 238 }}
      >
        <ProfileCard
          isMyFeed={!userId}
          nickname={datas?.nickname}
          bio={datas?.bio}
          profileImagePath={datas?.profile_image_path}
          accompanyComplteCount={datas?.completed_accompany_count}
        />
        <FeedContent title="동행 기록" moreContentLinkPath="" contentDatas={null} />
        <FeedContent title="모집한 동행" moreContentLinkPath="" contentDatas={null} />
      </FlexContainer>
    </>
  );
};

export default Feed;
