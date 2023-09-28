import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { SelectListDialog } from './SelectListDialog';
import { SelectListItem } from './SelectListDialog/SelectListDialog.types';
import { MiniProfile } from '../MiniProfile';

export const SelectDialogTestPages: FC = () => {
  const [isOpenReport, setOpenReport] = useState(false);
  const [isOpenManageMember, setOpenManageMember] = useState(false);

  return (
    <div>
      <Typography variant="h5">Select Dialog 테스트</Typography>

      <div style={{ display: 'flex', marginTop: '20px', gap: '10px' }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenReport(true);
          }}
        >
          신고하기
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            setOpenManageMember(true);
          }}
        >
          회원 관리
        </Button>
      </div>

      <SelectListDialog
        title="어떤 문제가 있나요?"
        message="제출해주시는 정보는 투게더 트래블 운영진만 볼 수 있습니다."
        isOpen={isOpenReport}
        list={[
          {
            value: 'MAN',
            content: '남성 유저로 의심이 되어요.',
          },
          {
            value: 'SPAM',
            content: '사기 또는 스팸 메시지를 보내는 것 같아요.',
          },
          {
            value: 'DISGUSTING',
            content: '불쾌해요',
          },
          {
            value: 'ETC',
            content: '기타',
            textfield: true,
            placeholder: '신고 사항을 입력해주세요.',
          },
        ]}
        confirmButtonLabel="제출하기"
        handleClose={() => {
          setOpenReport(false);
        }}
        handleConfirm={(selectItem: SelectListItem) => {
          console.log(selectItem);
        }}
      />

      <SelectListDialog
        title="회원 관리"
        message="강퇴할 회원을 선택해주세요."
        isOpen={isOpenManageMember}
        list={[
          {
            value: '1',
            content: <MiniProfile member={{memberId:1, nickname: '김행성'}} type='nickname'/>,
          },
          {
            value: '2',
            content: <MiniProfile member={{memberId:2, nickname: '이행성'}} type='nickname' />,
          },
          {
            value: '3',
            content: <MiniProfile member={{memberId:3, nickname: '박행성'}} type='nickname' />,
          },
          {
            value: '4',
            content: <MiniProfile member={{memberId:4, nickname: '유행성'}} type='nickname' />,
          },
        ]}
        confirmButtonLabel="제출하기"
        handleClose={() => {
          setOpenManageMember(false);
        }}
        handleConfirm={(selectItem: SelectListItem) => {
          console.log(selectItem);
        }}
      />
    </div>
  );
};
