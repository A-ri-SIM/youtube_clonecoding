import React from 'react';
import ChannelInfo from './ChannelInfo';
import { formatAgo } from '../utll/data';

export default function Comment({ comment }) {
  const { authorDisplayName, textOriginal, publishedAt, authorChannelId } =
    comment.snippet.topLevelComment.snippet;
  return (
    <li className="flex items-start w-full m-4">
      <ChannelInfo id={authorChannelId.value} type="comment" />
      <div className="w-4/6 p-2">
        <div className="flex ">
          <p className="font-medium mr-3 text-sm">{authorDisplayName}</p>
          <p className="text-xs text-gray-400">
            {formatAgo(publishedAt, 'ko')}
          </p>
        </div>
        <div>
          <p>{textOriginal}</p>
        </div>
      </div>
    </li>
  );
}
