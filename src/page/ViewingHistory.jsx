import React from 'react';
import { useOutletContext } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { GoHistory } from 'react-icons/go';

export default function ViewingHistory() {
  const { watched } = useOutletContext();
  return (
    <div className="w-full px-4">
      <h1 className="text-3xl font-bold py-6">시청 기록</h1>
      {watched.length <= 0 ? (
        <div className="flex flex-col items-center">
          <GoHistory className="text-7xl mb-3" />
          <p className="text-3xl mb-2">시청 기록이 없습니다.</p>
          <p className="text-lg">영상을 시청해보세요:)</p>
        </div>
      ) : (
        ''
      )}
      <ul className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-6">
        {watched.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
