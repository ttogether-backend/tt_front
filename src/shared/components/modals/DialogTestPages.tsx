import { FC } from 'react';
import { AlertDialogTestPages } from './AlertDialogTestPage';
import { SelectDialogTestPages } from './SelectListDialogTestPage';
import { AnyDialogTestPages } from './AnyDialogTestPage';
import { Stack } from '@mui/material';

export const DialogTestPages: FC = () => {
  return (
    <Stack spacing={2} margin={10}>
      <AlertDialogTestPages />
      <SelectDialogTestPages />
      <AnyDialogTestPages />
    </Stack>
  );
};
