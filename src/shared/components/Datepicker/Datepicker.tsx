import React, { FC, useState } from 'react';
import 'src/shared/components/Datepicker/Datepicker.css';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactSVG } from 'react-svg';

import { StyledDatePicker, BoxStyle, InputStyle } from './Datepicker.styles.ts';
import { WaveIcon } from 'src/assets/Wave.tsx';

export const CustomDatepicker: FC = () => {
  const dateState: RecoilState<Date> = atom({ key: 'dateState', default: new Date() });
  const [selectedDate, setSelectedDate] = useRecoilState(dateState);

  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  const CustomInput = React.forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  >((props, ref) => {
    return (
      <BoxStyle onClick={props.onClick}>
        <InputStyle {...props} ref={ref} />
        <ReactSVG
          className={'calendarIcon'}
          style={{ position: 'relative' }}
          src={'/public/images/svg/calendar.svg'}
        />
      </BoxStyle>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
        calendarContainer={MyContainer}
      />

      <WaveIcon />

      <StyledDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<CustomInput />}
      />
    </div>
  );
};
