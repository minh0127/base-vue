import moment from 'moment';

export function formatDate(date) {
  const value = moment(date, 'YYYY年MM月DD日').format('YYYY-MM-DD');
  return value;
}
