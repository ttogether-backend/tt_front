import React, { FC, useState } from 'react';
import 'src/shared/components/Datepicker/Datepicker.css';
import { ko } from 'date-fns/locale';
import { format, getDay } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactSVG } from 'react-svg';

import { CustomDatePicker, Box, Input, CustomCalendarContainer } from './Datepicker.styles.ts';
import { WaveIcon } from 'src/assets/WaveIcon.tsx';
import { RecoilState, atom, useRecoilState } from 'recoil';
import { LeftChevronIcon } from 'src/assets/LeftChevronIcon.tsx';
import { RightChevronIcon } from 'src/assets/RightChevronIcon.tsx';
import { CalendarContainerProps } from 'react-datepicker';

export const DatePicker: FC = () => {
  // const dateState: RecoilState<Date> = atom({ key: 'dateState', default: new Date() });
  // const [selectedDate, setSelectedDate] = useRecoilState(dateState);

  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  const CustomInput = React.forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  >((props, ref) => {
    return (
      <Box onClick={props.onClick}>
        <Input {...props} ref={ref} />
        <ReactSVG
          className={'calendarIcon'}
          style={{ position: 'relative' }}
          src={'/images/svg/calendar.svg'}
        />
      </Box>
    );
  });

  const CalendarContainer = ({ className, children }: CalendarContainerProps) => {
    return (
      <div
        style={{
          padding: '32px',
          background: '#fff',
          borderRadius: '20px',
          boxShadow: ' 0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '27px', color: '#494949' }}>여행 기간</div>

        <CustomCalendarContainer className={className}>{children}</CustomCalendarContainer>
      </div>
    );
  };

  const getDayName = (date: Date) => {
    console.log('date', date);

    if (getDay(date) === 0) {
      return 'sunday';
    }

    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CustomDatePicker
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => {
          return (
            <div
              style={{
                marginBottom: '27px',
              }}
            >
              {/* 이전달 */}
              <button
                aria-label="Previous Month"
                className={'react-datepicker__navigation react-datepicker__navigation--previous'}
                onClick={decreaseMonth}
              >
                <LeftChevronIcon
                  style={{
                    marginRight: '24px',
                  }}
                />
              </button>

              <div
                style={{
                  fontFamily: 'Pretendard',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  textAlign: 'left',
                }}
              >
                {format(monthDate, 'yyyy. MM')}
              </div>

              {/* 다음달 */}
              <button
                aria-label="Next Month"
                className={'react-datepicker__navigation react-datepicker__navigation--next'}
                onClick={increaseMonth}
              >
                <RightChevronIcon />
              </button>
            </div>
          );
        }}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
        calendarContainer={CalendarContainer}
        dayClassName={(date) => getDayName(date)}
      />

      <WaveIcon
        style={{
          margin: '0 8px',
        }}
      />

      <CustomDatePicker
        renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => {
          return (
            <div
              style={{
                textAlign: 'left',
              }}
            >
              {format(monthDate, 'yyyy. MM')}
            </div>
          );
        }}
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
