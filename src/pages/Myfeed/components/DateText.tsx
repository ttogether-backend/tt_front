import moment from 'moment';

interface DateTextProps {
  date: Date;
}

const style = {
  color: '#696e64',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '16px',
};

const DateText = ({ date }: DateTextProps) => {
  const renderDateText = (date: Date) => {
    const currentDate = moment();
    const provideDate = moment(date);

    const diffInDays = currentDate.diff(provideDate, 'days');
    const diffInHours = currentDate.diff(provideDate, 'hours');
    const diffInMinutes = currentDate.diff(provideDate, 'minutes');

    if (diffInDays > 0) {
      return `${diffInDays} 일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours} 시간 전`;
    } else {
      return `${diffInMinutes} 분 전`;
    }
  };

  return <div style={style}>{renderDateText(date)}</div>;
};

export default DateText;
