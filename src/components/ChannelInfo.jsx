import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name, publishedAt }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoding,
    error,
    data: url,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      <div className="flex mt-4 items-center">
        {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
        <p className="text-lg font-medium ml-3">{name}</p>
      </div>
    </>
  );
}
