import React from 'react';

export default function Loding() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center  dark:bg-zinc-900">
      <i className="fa-solid fa-spinner text-6xl text-zinc-800 animate-[spin_2s_linear_infinite]"></i>
      <p className="text-2xl mt-4">Loading...</p>
    </div>
  );
}
