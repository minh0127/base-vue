import dayjs from 'dayjs';

export function formatDate(date) {
  const value = dayjs(date, 'YYYY年MM月DD日').format('YYYY-MM-DD');
  return value;
}
