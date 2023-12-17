import { useEffect, useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router';
import { getCookie } from 'src/components/login/cookie';
import { getAccompany, getProfile, makeComponentProps } from '../api/feedApi';
import { AccompanyCard } from 'src/shared/components/AccompanyCard';
import { VerticalScrollContainer } from '../layout/VerticalScrollContainer';
import { AccompanyCardProps } from 'src/shared/components/AccompanyCard/AccompanyCard.types';
import { Badge } from '../components/Badge';
import { FeedBackground } from '../components/FeedBackground';
import { FlexContainer } from '../layout/FlexContainer';
import { NonNavbarPage } from 'src/pages/layout';
import { SideMenuContainer } from '../layout/SideMenuContainer';
import { myfeedMenuList } from './index.type';
import { isUUID } from 'src/Utils/UuidUtils';
import { LoadingPage, isPageLoding } from 'src/Utils/PageUtils';

interface FeedData {
  profile: any;
  hostAccompanyList: any[];
  completeAccompanyList: any[];
}

interface FeedProps {
  memberId?: string;
}

interface ProfileCardProps {
  isMyFeed: boolean;
  profileImagePath: string;
  nickname: string;
  bio: string;
  accompanyComplteCount: number;
}

interface FeedContentProps {
  title: string;
  moreContentLinkPath: string;
  contentDatas: AccompanyCardProps[];
}

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
          <Button style={{ width: 84, height: 44 }}>1:1채팅</Button>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

const FeedContent = ({ title, moreContentLinkPath, contentDatas }: FeedContentProps) => {
  const navigate = useNavigate();

  return (
    <FlexContainer direction="column" gap={24}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text fontType={Text.FontType.subTitle}>{title}</Text>
        {!contentDatas || (contentDatas instanceof Array && contentDatas.length == 0) ? (
          <></>
        ) : (
          <Button
            onClick={() => {
              navigate(moreContentLinkPath);
            }}
          >
            더보기
          </Button>
        )}
      </div>

      {!contentDatas || (contentDatas instanceof Array && contentDatas.length == 0) ? (
        <>{title}이 없습니다.</>
      ) : (
        <VerticalScrollContainer>
          {contentDatas?.map((props: AccompanyCardProps, index: number) => {
            return <AccompanyCard key={`accompany-card-${title}-${index}`} {...props} />;
          })}
        </VerticalScrollContainer>
      )}
    </FlexContainer>
  );
};

const FeedContainer = ({ memberId }: FeedProps) => {
  const [datas, setDatas] = useState<FeedData>(null);
  const navigate = useNavigate();

  const isMyFeed = memberId ? false : true;

  useEffect(() => {
    (async function () {
      const id = isMyFeed ? memberId : getCookie('memberId'); //todo lcoalstorage 로직으로 변경

      const profileResult = await getProfile(id);

      if (!profileResult) {
        alert('없는 회원입니다.');
        navigate(-1);
        return;
      } else {
        const hostAccompanyListResult = await getAccompany(
          {
            memberId: id,
            role: ['HOST'],
            progressStatus: ['READY', 'CONFIRM'],
            recruitStatus: ['RECRUITING'],
          },
          1,
          5
        );

        const completeAccompanyList = await getAccompany(
          { memberId: id, progressStatus: ['COMPLETE'] },
          1,
          5
        );

        setDatas({
          profile: profileResult.data,
          hostAccompanyList: hostAccompanyListResult.data?.accompany_list,
          completeAccompanyList: completeAccompanyList.data?.accompany_list,
        });
      }
    })();
  }, [memberId]);

  return isPageLoding(datas) ? (
    <LoadingPage />
  ) : (
    <>
      <FeedBackground src={datas?.profile?.myfeed_image_path} />

      <FlexContainer
        direction="column"
        gap={40}
        width={'1048px'}
        style={{ marginTop: memberId ? 144 : 0, marginBottom: 238 }}
      >
        <ProfileCard
          isMyFeed={!memberId}
          nickname={datas?.profile?.nickname}
          bio={datas?.profile?.bio}
          profileImagePath={datas?.profile?.profile_image_path}
          accompanyComplteCount={datas?.profile?.completed_accompany_count}
        />
        <FeedContent
          title="동행 기록"
          moreContentLinkPath={`/feed/${isMyFeed ? 'my' : memberId}/accompany/complete`}
          contentDatas={makeComponentProps(datas?.completeAccompanyList)}
        />
        <FeedContent
          title="모집한 동행"
          moreContentLinkPath={`/feed/${isMyFeed ? 'my' : memberId}/accompany/host`}
          contentDatas={makeComponentProps(datas?.hostAccompanyList)}
        />
      </FlexContainer>
    </>
  );
};

const Feed = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const validId = () => {
    if (id && !isUUID(id)) {
      alert('잘못된 접근입니다.');
      navigate(-1);
      return false;
    }

    return true;
  };

  const isMyFeed = () => {
    if (id) {
      return false;
    }

    return true;
  };

  return (
    <NonNavbarPage>
      {!isMyFeed() && validId() ? (
        <FlexContainer justifyContent="center">
          <FeedContainer memberId={id} />
        </FlexContainer>
      ) : (
        <SideMenuContainer menuItemList={myfeedMenuList} activeMenuId="menu_profile">
          <SideMenuContainer.SideMenuContent>
            <FeedContainer />
          </SideMenuContainer.SideMenuContent>
        </SideMenuContainer>
      )}
    </NonNavbarPage>
  );
};

export default Feed;
