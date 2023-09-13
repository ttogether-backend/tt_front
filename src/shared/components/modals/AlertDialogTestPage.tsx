import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { AlertDialog } from 'src/shared/components/modals/AlertDialog';
import { dialogButtonStyleCode } from './common/DialogButton.types';

export const AlertDialogTestPages: FC = () => {
  const [isOpenRequest, setOpenRequest] = useState(false);
  const [isOpenBlock, setOpenBlock] = useState(false);
  const [isOpenDeleteComment, setOpenDeleteComment] = useState(false);

  return (
    <div>
      <Typography variant="h5">Alert Dialog 테스트</Typography>

      <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenRequest(true);
          }}
        >
          동행신청하기
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setOpenBlock(true);
          }}
        >
          차단하기
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setOpenDeleteComment(true);
          }}
        >
          댓글삭제
        </Button>
      </div>

      <AlertDialog
        title="동행 신청을 보냈습니다."
        message="함께 즐거운 여행하시길 바라요!"
        isCloseBackgroundClick={true}
        isOpen={isOpenRequest}
        handleClose={() => {
          setOpenRequest(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.black,
            label: '확인하기',
            handleClick: () => {
              setOpenRequest(false);
            },
          },
        ]}
      />

      <AlertDialog
        title="{닉네임} 님을 차단하시겠습니까?"
        message="차단 후에는 상대방이 보내는 메시지를 받거나 게시글 및 댓글을 볼 수 없습니다. 차단 여부는 나의 피드 - 내 계정 기록"
        isOpen={isOpenBlock}
        handleClose={() => {
          setOpenBlock(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.white,
            label: '취소하기',
            handleClick: () => {
              setOpenBlock(false);
            },
          },
          {
            style: dialogButtonStyleCode.black,
            label: '차단하기',
            handleClick: () => {
              setOpenBlock(false);
            },
          },
        ]}
      />

      <AlertDialog
        title="댓글을 삭제하시겠습니까?"
        message="한번 삭제 시 복구되지 않습니다."
        isOpen={isOpenDeleteComment}
        handleClose={() => {
          setOpenDeleteComment(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.white,
            label: '취소하기',
            handleClick: () => {
              setOpenDeleteComment(false);
            },
          },
          {
            style: dialogButtonStyleCode.red,
            label: '삭제하기',
            handleClick: () => {
              setOpenDeleteComment(false);
            },
          },
        ]}
      />
    </div>
  );
};
