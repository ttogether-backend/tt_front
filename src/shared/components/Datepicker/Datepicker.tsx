import React, { FC, useState } from 'react';
import 'src/shared/components/Datepicker/Datepicker.css';
import { ko } from 'date-fns/locale';
import { format, getDay } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactSVG } from 'react-svg';

import { CustomDatePicker, Box, Input, CustomCalendarContainer } from './Datepicker.styles.ts';
import { RecoilState, atom, useRecoilState } from 'recoil';
import { CalendarContainerProps } from 'react-datepicker';
import { LeftChevronIcon } from 'src/assets/icon/LeftChevronIcon.tsx';
import { RightChevronIcon } from 'src/assets/icon/RightChevronIcon.tsx';
import { WaveIcon } from 'src/assets/icon/WaveIcon.tsx';

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
        <Input {...props} ref={ref} readOnly />
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
          width: '463px',
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
    if (getDay(date) === 0) {
      return 'sunday';
    }

    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
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
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ]}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
        calendarContainer={CalendarContainer}
        wrapperClassName="datePicker"
        dayClassName={(date) => getDayName(date)}
      />

      <WaveIcon
        style={{
          margin: '0 14px',
        }}
      />

      <CustomDatePicker
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => {
          return (
            <div
              style={{
                marginBottom: '27px',
              }}
            >
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
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [-249, 10],
            },
          },
        ]}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        calendarContainer={CalendarContainer}
        customInput={<CustomInput />}
      />
    </div>
  );
};
