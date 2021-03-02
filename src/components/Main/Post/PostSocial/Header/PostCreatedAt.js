import { parseISO } from 'date-fns/esm/fp';
import React from 'react'
import { formatDistanceToNow } from 'date-fns/esm';

export default function PostCreatedAt({ timestamp }) {

  let createdAt = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    createdAt = timePeriod;
  }

  return (
    <span className="social__created-at">
      { createdAt } ago
    </span>
  )
}
