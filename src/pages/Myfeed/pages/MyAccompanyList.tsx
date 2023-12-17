import { SideMenuContainer } from '../layout/SideMenuContainer';
import { myfeedMenuList } from './index.type';
import { NonNavbarPage } from 'src/pages/layout';
import { FlexContainer } from '../layout/FlexContainer';
import { useEffect, useState } from 'react';
import { Tabs } from '../components/Tabs';
import { getAccompany, makeComponentProps } from '../api/feedApi';
import { getCookie } from 'src/components/login/cookie';
import { VerticalScrollContainer } from '../layout/VerticalScrollContainer';
import { AccompanyCardProps } from 'src/shared/components/AccompanyCard/AccompanyCard.types';
import { AccompanyCard } from 'src/shared/components/AccompanyCard';
import { LoadingPage, isPageLoding } from 'src/Utils/PageUtils';

const tabInfo = {
  0: {
    index: 0,
    label: '진행 중인 동행',
    searchCondition: {
      role: ['GUEST'],
      progressStatus: ['READY', 'CONFIRM'],
    },
  },
  1: {
    index: 1,
    label: '완료한 동행',
    searchCondition: {
      progressStatus: ['COMPLETE', 'CANCEL'],
    },
  },
  2: {
    index: 2,
    label: '모집한 동행',
    searchCondition: {
      role: ['HOST'],
      progressStatus: ['READY', 'CONFIRM', 'COMPLETE', 'CANCEL'],
    },
  },
};

const MyAccompanyList = () => {
  const [tabValue, setValue] = useState(0);
  const [datas, setDatas] = useState<any>(null);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async function () {
      const result = await getAccompany(
        {
          memberId: getCookie('memberId'),
          ...tabInfo[tabValue].searchCondition,
        },
        1,
        5
      );

      setDatas(result?.data);
    })();
  }, [tabValue]);

  return (
    <NonNavbarPage>
      <SideMenuContainer menuItemList={myfeedMenuList} activeMenuId="menu_accompany">
        <SideMenuContainer.SideMenuContent>
          <FlexContainer direction="column" width="100%" gap={40}>
            <Tabs value={tabValue} onChange={handleChange}>
              <Tabs.Tab label={tabInfo[0].label} />
              <Tabs.Tab label={tabInfo[1].label} />
              <Tabs.Tab label={tabInfo[2].label} />
            </Tabs>

            {isPageLoding(datas) ? (
              <LoadingPage />
            ) : datas?.total_count == 0 ? (
              <>{tabInfo[tabValue].label}이 없습니다.</>
            ) : (
              <VerticalScrollContainer>
                {makeComponentProps(datas?.accompany_list)?.map(
                  (props: AccompanyCardProps, index: number) => {
                    return <AccompanyCard key={`accompany-card-${index}`} {...props} />;
                  }
                )}
              </VerticalScrollContainer>
            )}
          </FlexContainer>
        </SideMenuContainer.SideMenuContent>
      </SideMenuContainer>
    </NonNavbarPage>
  );
};

export default MyAccompanyList;
