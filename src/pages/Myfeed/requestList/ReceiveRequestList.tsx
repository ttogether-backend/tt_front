import { useEffect, useState } from 'react';

// utils
import { RequestListItemProps } from './index.type';
import {
  ACCOMPANY_REQUEST_STATUS,
  getReceiveRequestList,
  makeComponentProps,
  patchRequest,
} from '../api/requestApi';
import { dialogButtonStyleCode } from 'src/shared/components/modals/common/DialogButton.types';

//components
import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import DateText from '../components/DateText';
import EllipsisTitle from '../components/EllipsisTitle';
import UserInfo from '../components/UserInfo';
import { ColumnContainer } from '../layout/ColumnContainer';
import { ListContainer, ListContainerItem } from '../layout/ListContainer';
import { RowContainer } from '../layout/RowContainer';
import { AlertDialog } from 'src/shared/components/modals/AlertDialog';

const updateRequestStatus = async (
  requestId: number,
  updateValue: string,
  updateComponent: (changeValue: string) => void
) => {
  const result = await patchRequest(requestId, updateValue);

  if (result) {
    console.log('수락했습니다.'); //todo: 스낵바 띄우기
    updateComponent(updateValue);
  } else {
    console.log('수락실패');
  }
};

const ReceiveRequestListItem = ({ postInfo, requestInfo }: RequestListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<string>(requestInfo.status);

  return (
    <ListContainerItem>
      <RowContainer style={{ width: '100%', justifyContent: 'space-between' }}>
        <ColumnContainer style={{ alignItems: 'flex-start', gap: 12 }}>
          <EllipsisTitle
            maxWidth={550} //개선안 찾기
            ellipsisContent={`[${postInfo.title}`}
            subContent="] 글에서 동행 신청이 왔습니다."
            onClick={() => {
              console.log(postInfo.id); //todo: post 로 이동
            }}
          />

          <UserInfo
            id={requestInfo.requester.id}
            nickname={requestInfo.requester.nickname}
            profileImagePath={requestInfo.requester.profileImagePath}
          />

          <DateText date={requestInfo.date} />
        </ColumnContainer>

        <ButtonGroup>
          {requestStatus === ACCOMPANY_REQUEST_STATUS.REQUESTING.code ? (
            <>
              <Button
                className="green"
                onClick={() => {
                  updateRequestStatus(
                    requestInfo.id,
                    ACCOMPANY_REQUEST_STATUS.ACCEPT.code,
                    setRequestStatus
                  );
                }}
              >
                {ACCOMPANY_REQUEST_STATUS.ACCEPT.name}
              </Button>
              <Button
                className="red"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                {ACCOMPANY_REQUEST_STATUS.REFUSAL.name}
              </Button>
            </>
          ) : (
            <Button disabled={true}>{ACCOMPANY_REQUEST_STATUS[requestStatus].name}</Button>
          )}
        </ButtonGroup>
      </RowContainer>

      <AlertDialog
        title="동행 신청을 거절하시겠습니까?"
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.white,
            label: '취소하기',
            handleClick: () => {
              setIsOpen(false);
            },
          },
          {
            style: dialogButtonStyleCode.red,
            label: '거절하기',
            handleClick: async () => {
              updateRequestStatus(
                requestInfo.id,
                ACCOMPANY_REQUEST_STATUS.REFUSAL.code,
                setRequestStatus
              );
              setIsOpen(false);
            },
          },
        ]}
      />
    </ListContainerItem>
  );
};

const ReceiveRequestList = () => {
  const [datas, setDatas] = useState<any>(null);

  useEffect(() => {
    (async function () {
      const data = await getReceiveRequestList(1, 10);
      setDatas(data);
    })();
  }, []);

  return (
    <ListContainer>
      {makeComponentProps(datas)?.map((requestListItem: RequestListItemProps, index: number) => {
        return (
          <ReceiveRequestListItem key={`receive-request-list-item-${index}`} {...requestListItem} />
        );
      })}
    </ListContainer>
  );
};

export default ReceiveRequestList;
