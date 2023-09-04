import { atom, RecoilState, useRecoilState } from 'recoil';
import { FC } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatepicker: FC = (
) => {
  const dateState:RecoilState<Date> = atom({key: 'dateState', default: new Date()});
  const [selectedDate , setSelectedDate] = useRecoilState(dateState);

  return <DatePicker
    selected={selectedDate}
    onChange={(date:Date)=>setSelectedDate(date)}
  />
}