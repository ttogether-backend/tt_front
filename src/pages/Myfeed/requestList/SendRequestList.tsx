import { useEffect } from 'react';
import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import DateText from '../components/DateText';
import EllipsisTitle from '../components/EllipsisTitle';
import { ColumnContainer } from '../layout/ColumnContainer';
import { ListContainer, ListContainerItem } from '../layout/ListContainer';
import { RowContainer } from '../layout/RowContainer';
import { RequestListItemProps } from './index.type';
import { getSendRequestList } from '../api/requestApi';

const nicknameStyle = {
  color: '#696E64',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px',
};

const testDatas: RequestListItemProps[] = [
  {
    postInfo: {
      id: 1,
      title:
        '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사일이삼사오육칠팔구',
    },
    requestInfo: {
      id: 1,
      requester: {
        id: 'e4f5d6b9-bc9b-455e-aa01-f822cef11e38',
        nickname: '호랑이어흥',
        profileImagePath:
          'https://img.freepik.com/free-photo/cheerful-teenage-girl-smiling-face-portrait_53876-145642.jpg',
      },
      date: new Date(2023, 11, 7, 15, 21, 32),
      status: 'REQUESTING',
    },
  },
  {
    postInfo: {
      id: 1,
      title:
        '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사일이삼사오육칠팔구',
    },
    requestInfo: {
      id: 1,
      requester: {
        id: 'e4f5d6b9-bc9b-455e-aa01-f822cef11e38',
        nickname: '호랑이어흥',
        profileImagePath:
          'https://img.freepik.com/free-photo/cheerful-teenage-girl-smiling-face-portrait_53876-145642.jpg',
      },
      date: new Date(2023, 11, 7, 9, 31, 32),
      status: 'REQUESTING',
    },
  },
  {
    postInfo: {
      id: 1,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사',
    },
    requestInfo: {
      id: 1,
      requester: {
        id: '76800dcd-6a00-4a9c-bae4-096d95ed7082',
        nickname: '호랑이어흥',
        profileImagePath:
          'https://img.freepik.com/free-photo/cheerful-teenage-girl-smiling-face-portrait_53876-145642.jpg',
      },
      date: new Date(2023, 11, 5),
      status: 'ACCEPT',
    },
  },
  {
    postInfo: {
      id: 1,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사',
    },
    requestInfo: {
      id: 1,
      requester: {
        id: '76800dcd-6a00-4a9c-bae4-096d95ed7082',
        nickname: '호랑이어흥',
        profileImagePath:
          'https://img.freepik.com/free-photo/cheerful-teenage-girl-smiling-face-portrait_53876-145642.jpg',
      },
      date: new Date(2023, 10, 12),
      status: 'REFUSAL',
    },
  },
  {
    postInfo: {
      id: 1,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사',
    },
    requestInfo: {
      id: 1,
      requester: {
        id: '76800dcd-6a00-4a9c-bae4-096d95ed7082',
        nickname: '호랑이어흥',
        profileImagePath:
          'https://img.freepik.com/free-photo/cheerful-teenage-girl-smiling-face-portrait_53876-145642.jpg',
      },
      date: new Date(2023, 10, 12),
      status: 'CANCEL',
    },
  },
];

const SendRequestListItem = ({ postInfo, requestInfo }: RequestListItemProps) => {
  const buttonText = {
    ACCEPT: '수락',
    REFUSAL: '거절',
    CANCEL: '신청 취소',
  };

  useEffect(() => {
    // getSendRequestList(1, 10);
  }, [])

  return (
    <ListContainerItem>
      <RowContainer style={{ width: '100%', justifyContent: 'space-between' }}>
        <ColumnContainer style={{ alignItems: 'flex-start', gap: 12 }}>
          <EllipsisTitle
            maxWidth={550} //개선안 찾기
            ellipsisContent={`[${postInfo.title}`}
            subContent="] 글로 보낸 동행 신청"
            onClick={() => {
              console.log(postInfo.id);
            }}
          />

          <div style={nicknameStyle}>{`by ${requestInfo.requester.nickname}`}</div>

          <DateText date={requestInfo.date} />
        </ColumnContainer>

        <ButtonGroup>
          {requestInfo.status === 'REQUESTING' ? (
            <>
              <Button className="background-black">{buttonText.CANCEL}</Button>
            </>
          ) : (
            <Button disabled={true}>{buttonText[requestInfo.status]}</Button>
          )}
        </ButtonGroup>
      </RowContainer>
    </ListContainerItem>
  );
};

const SendRequestList = () => {
  return (
    <ListContainer>
      {testDatas?.map((requestListItem: RequestListItemProps, index: number) => {
        return <SendRequestListItem key={`send-request-list-item-${index}`} {...requestListItem} />;
      })}
    </ListContainer>
  );
};

export default SendRequestList;
