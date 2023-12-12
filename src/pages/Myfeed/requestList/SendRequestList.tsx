import { useEffect, useState } from 'react';

//components
import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import DateText from '../components/DateText';
import EllipsisTitle from '../components/EllipsisTitle';
import { ListContainer, ListContainerItem } from '../layout/ListContainer';
import { FlexContainer } from '../layout/FlexContainer';

// utils
import { RequestListItemProps } from './index.type';
import {
  ACCOMPANY_REQUEST_STATUS,
  getSendRequestList,
  makeComponentProps,
  patchRequest,
} from '../api/requestApi';
import DialogUtils, { DIALOG_BUTTON_STYLE } from 'src/Utils/DialogUtils';
import SnackbarUtils, { SNACKBAR_STYLE } from 'src/Utils/SnackbarUtils';

const nicknameStyle = {
  color: '#696E64',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px',
};

const SendRequestListItem = ({ postInfo, requestInfo }: RequestListItemProps) => {
  const [requestStatus, setRequestStatus] = useState<string>(requestInfo.status);

  return (
    <ListContainerItem>
     <FlexContainer direction='row' justifyContent='space-between'>
        <FlexContainer direction='column' alignItems="flex-start" gap={12}>
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
        </FlexContainer>

        <ButtonGroup>
          {requestStatus === ACCOMPANY_REQUEST_STATUS.REQUESTING.code ? (
            <>
              <Button
                className="background-black"
                onClick={() => {
                  DialogUtils.open({
                    title: '동행 신청 취소',
                    message: '동행 신청을 취소하시겠습니까?',
                    buttons: [
                      {
                        style: DIALOG_BUTTON_STYLE.white,
                        label: '아니오',
                      },
                      {
                        style: DIALOG_BUTTON_STYLE.red,
                        label: '네',
                        handleClick: async () => {
                          const result = await patchRequest(
                            requestInfo.id,
                            ACCOMPANY_REQUEST_STATUS.CANCEL.code
                          );

                          if (result) {
                            SnackbarUtils.open({
                              message: '신청을 취소하였습니다.',
                              type: SNACKBAR_STYLE.success,
                            });
                            setRequestStatus(ACCOMPANY_REQUEST_STATUS.CANCEL.code);
                          }
                        },
                      },
                    ],
                  });
                }}
              >
                {ACCOMPANY_REQUEST_STATUS.CANCEL.name}
              </Button>
            </>
          ) : (
            <Button disabled={true}>{ACCOMPANY_REQUEST_STATUS[requestStatus].name}</Button>
          )}
        </ButtonGroup>
      </FlexContainer>
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
