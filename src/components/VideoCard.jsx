import React from 'react';
import { formatAgo } from '../utll/data';
import { useNavigate } from 'react-router-dom';
import AddPlayList from './AddPlayList';

export default function VideoCard({ video, type, flex, added }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={flex ? 'flex mb-4 cursor-pointer ' : 'mb-4 cursor-pointer'}
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
    >
      <img
        className={
          flex
            ? 'max-w-40 mr-4 rounded-lg hover:rounded-none duration-200'
            : 'rounded-lg hover:rounded-none duration-200'
        }
        src={thumbnails.medium.url}
        alt="title"
      />
      <div className="relative">
        <p
          className={isList ? 'line-clamp-2' : 'font-semibold m-2 line-clamp-2'}
        >
          {title}
        </p>

        <p className="text-sm opacity-80 ">{channelTitle}</p>
        <p className="text-sm opacity-80 ">{formatAgo(publishedAt, 'ko')}</p>
        {flex ? (
          ''
        ) : (
          <div className={added ? 'hidden' : 'absolute right-6 bottom-1'}>
            <AddPlayList video={video} />
          </div>
        )}
      </div>
    </li>
  );
}
