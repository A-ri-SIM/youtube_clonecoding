import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Darkmode from './Darkmode';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-8 box-border">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-3xl text-brand" />
        <h1 className=" ml-1 text-2xl font-logo font-medium tracking-tight">
          YouTube
        </h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-5/12 pl-4 border border-zinc-600 text-base text-gray-50 rounded-s-full"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-200 px-6 rounded-e-full border border-zinc-600 border-l-0 dark:text-black">
          <BsSearch className="text-base" />
        </button>
      </form>
      <Darkmode />
    </header>
  );
}
