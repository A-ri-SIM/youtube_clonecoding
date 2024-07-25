import React from 'react';
import { formatAgo } from '../utll/data';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={isList ? 'mb-4 cursor-pointer' : 'mb-4 cursor-pointer'}
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img
        className="rounded-lg hover:rounded-none duration-200"
        src={thumbnails.medium.url}
        alt="title"
      />
      <div>
        <p
          className={isList ? 'line-clamp-2' : 'font-semibold m-2 line-clamp-2'}
        >
          {title}
        </p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
