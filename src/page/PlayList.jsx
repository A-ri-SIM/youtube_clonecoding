import React from 'react';
import VideoCard from '../components/VideoCard';
import { useOutletContext } from 'react-router-dom';
import { BiSolidVideoPlus } from "react-icons/bi";

export default function PlayList(added) {
  const { addVideo } = useOutletContext();
  return (
    <div className='w-full px-4'>
      <h1 className="text-3xl font-bold py-6">재생 목록</h1>
      {addVideo.length <= 0 ? 
      <div className='flex flex-col items-center'>
        <BiSolidVideoPlus className='text-7xl mb-3'/>
        <p className='text-3xl mb-2'>재생 목록이 없습니다.</p>
        <p className='text-lg'>영상을 추가해보세요:)</p>
      </div> : ''}
      <ul className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-6">
        {addVideo.map((video) => (
          <VideoCard key={video.id} video={video} added={added} />
        ))}
      </ul>
    </div>
  );
}
