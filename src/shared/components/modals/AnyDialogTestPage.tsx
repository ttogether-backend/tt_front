import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { InquiryDialog } from './InquiryDialog';
import { InquiryDialogFormValues } from './InquiryDialog/inquiryDialog.types';
import { FriendListModal } from './FrindListModal';
import { friendTabListCode } from './FrindListModal/FriendListModal.types';
import { UpdateStatusDialog } from './UpdateStatusDialog';
import { UpdateStatusObject } from './UpdateStatusDialog/UpdateStatusDialog.types';

export const AnyDialogTestPages: FC = () => {
  const [isOpenInquiry, setOpenInquiry] = useState(false);
  const [isOpenFriends, setOpenFriends] = useState(false);
  const [isOpenUpdateStatus, setOpenUpdateStatus] = useState(false);

  return (
    <div>
      <Typography variant="h5">특정 다이얼로그 테스트</Typography>

      <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenInquiry(true);
          }}
        >
          문의하기
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setOpenFriends(true);
          }}
        >
          친구목록
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setOpenUpdateStatus(true);
          }}
        >
          동행 상태 설정
        </Button>
      </div>

      <InquiryDialog
        isOpen={isOpenInquiry}
        handleClose={() => {
            setOpenInquiry(false);
        }}
        handleConfirm={(formValues: InquiryDialogFormValues) => {
          console.log(formValues);
        }}
      />

      <FriendListModal
      myMemberInfo={{memberId:1, nickname:'김행성'}}
      isOpen={isOpenFriends}
      isCloseBackgroundClick
      tab={friendTabListCode.follower}
      handleClose={() => {setOpenFriends(false);}}
      />

      <UpdateStatusDialog
         currentStatus={{accompanyId:1, status: 'CONFIRM', recruitStatus: 'RECRUITING'}}
             isOpen={isOpenUpdateStatus}
          handleClose={() => {setOpenUpdateStatus(false)}}
          handleConfirm={(updateStatusObject:UpdateStatusObject) => { console.log(updateStatusObject)}}
      />
    </div>
  );
};
