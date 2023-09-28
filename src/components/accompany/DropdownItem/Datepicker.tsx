import React, { useState } from 'react';
import { StyledDatePicker } from 'src/shared/components/Datepicker/Datepicker.styles';
import { DropdownPropsType } from './Datepicker.type';

const DateRangePicker: React.FC<DropdownPropsType> = ({ onDatesChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  
  const formatDate = (date: Date | null) => {
    if (!date) return null;
    const year = date.getFullYear(); // Get last two digits of the year
    const month = (`0${date.getMonth() + 1}`).slice(-2); // Months are 0-indexed
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };
  
  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if(onDatesChange) {
      onDatesChange({
        startDate: formatDate(start), 
        endDate: formatDate(end)
      });
    }
  };

  return (
    <StyledDatePicker
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={onDateChange}
      selectsRange
      inline
    />
  );
};

export default DateRangePicker;
