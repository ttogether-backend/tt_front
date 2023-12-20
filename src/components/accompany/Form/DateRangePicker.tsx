import React, { useState } from 'react';
import { DatePicker } from 'src/shared/components/Datepicker/Datepicker';
import { DateRangePropsType } from './DateRangePicker.types';

const DateRangePicker = ({ setBasicInfo }) => {
  const formatDate = (date: Date | null) => {
    if (!date) return null;
    const year = date.getFullYear(); // Get last two digits of the year
    const month = `0${date.getMonth() + 1}`.slice(-2); // Months are 0-indexed
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (start: Date, end: Date) => {
    const formattedStartDate = formatDate(start);
    const formattedEndDate = formatDate(end);

    if (setBasicInfo) {
      setBasicInfo({
        expected_start_at: formattedStartDate,
        expected_end_at: formattedEndDate,
      });
    }
  };

  return <DatePicker onDateChange={handleDateChange} />;
};

export default DateRangePicker;
