import React from 'react';
import { MdSubscriptions } from 'react-icons/md';
import { IoPersonCircleOutline } from 'react-icons/io5';

export default function Subscribe() {
  return (
    <div className="w-full flex flex-col items-center pt-20">
      <MdSubscriptions className="text-8xl mb-6" />
      <p className="text-3xl mb-4">새로운 동영상을 놓치지 마세요</p>
      <p>즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.</p>
      <button className="flex justify-center border rounded-full p-2 px-4 mt-4 text-blue-600 ">
        <IoPersonCircleOutline className='text-2xl mr-1'/>
        로그인
      </button>
    </div>
  );
}
