import { parseISO } from "date-fns";
import { formatDistanceToNow } from 'date-fns/esm';


export const formatDateToNow = (timestamp) => {
  let timeAgo = ''
  const date = parseISO(timestamp);
  const timePeriod = formatDistanceToNow(date);
  timeAgo = `${timePeriod} ago`;
  return timeAgo;
}
