import { atom, RecoilState, useRecoilState } from 'recoil';
import React, { FC } from 'react';
import 'src/shared/components/Datepicker/Datepicker.css'
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { ReactSVG } from 'react-svg';

import { StyledDatePicker, BoxStyle, InputStyle } from './Datepicker.styles.ts';

export const CustomDatepicker: FC = (
) => {
  const dateState:RecoilState<Date> = atom({key: 'dateState', default: new Date()});
  const [selectedDate , setSelectedDate] = useRecoilState(dateState);

  const CustomInput=
    React.forwardRef<HTMLInputElement, React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>>(
      (props, ref) => {
        // @ts-ignore
        return <div style={BoxStyle}>
          <input {...props} ref={ref} style={InputStyle}/>
          <ReactSVG
            onClick={props.onClick}
            className={'calendarIcon'}
            style={{position:'relative'}}
            src={"/images/svg/calendar.svg"}/>
        </div>
  });

  return <StyledDatePicker
    locale={ko}
    dateFormat="yyyy.MM.dd"
    selected={selectedDate}
    customInput={<CustomInput/>}
    onChange={(date:Date)=> setSelectedDate(date)}
  />
}