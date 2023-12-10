import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import DateText from '../components/DateText';
import EllipsisTitle from '../components/EllipsisTitle';
import { ColumnContainer } from '../layout/ColumnContainer';
import { ListContainer, ListContainerItem } from '../layout/ListContainer';
import { RowContainer } from '../layout/RowContainer';
import { RequestListItemProps } from './index.type';
import {
  ACCOMPANY_REQUEST_STATUS,
  getSendRequestList,
  makeComponentProps,
  patchRequest,
} from '../api/requestApi';
import { AlertDialog } from 'src/shared/components/modals/AlertDialog';
import { dialogButtonStyleCode } from 'src/shared/components/modals/common/DialogButton.types';

const nicknameStyle = {
  color: '#696E64',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px',
};

const SendRequestListItem = ({ postInfo, requestInfo }: RequestListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<string>(requestInfo.status);

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
          {requestStatus === ACCOMPANY_REQUEST_STATUS.REQUESTING.code ? (
            <>
              <Button className="background-black" onClick={()=>{
                setIsOpen(true);
              }}>{ACCOMPANY_REQUEST_STATUS.CANCEL.name}</Button>
            </>
          ) : (
            <Button disabled={true}>{ACCOMPANY_REQUEST_STATUS[requestStatus].name}</Button>
          )}
        </ButtonGroup>
      </RowContainer>

      <AlertDialog
        title="동행 신청을 취소하시겠습니까?"
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.white,
            label: '아니오',
            handleClick: () => {
              setIsOpen(false);
            },
          },
          {
            style: dialogButtonStyleCode.red,
            label: '네',
            handleClick: async () => {
              const result = await patchRequest(requestInfo.id, ACCOMPANY_REQUEST_STATUS.CANCEL.code);

              if (result) {
                console.log('취소했습니다.'); //todo: 스낵바 띄우기
                setRequestStatus(ACCOMPANY_REQUEST_STATUS.CANCEL.code);
              } else {
                console.log('취소실패');
              }
              setIsOpen(false);
            },
          },
        ]}
      />
    </ListContainerItem>
  );
};

const SendRequestList = () => {
  const [datas, setDatas] = useState<any>(null);

  useEffect(() => {
    (async function () {
      const data = await getSendRequestList(1, 10);
      setDatas(data);
    })();
  }, []);

  return (
    <ListContainer>
      {makeComponentProps(datas)?.map((requestListItem: RequestListItemProps, index: number) => {
        return <SendRequestListItem key={`send-request-list-item-${index}`} {...requestListItem} />;
      })}
    </ListContainer>
  );
};

export default SendRequestList;
