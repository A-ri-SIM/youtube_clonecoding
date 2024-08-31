import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Darkmode from './Darkmode';
import HambergerMenu from './HambergerMenu';

export default function SearchHeader({ isClick, setIsClick }) {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const width = window.innerWidth;
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const showSearchBar = () => {
    if (width <= 640) {
      document
        .querySelector('#searchBar')
        .classList.remove('max-[640px]:hidden');
    }
  };
  const hiddenSearchBar = () => {
    document.querySelector('#searchBar').classList.add('max-[640px]:hidden');
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className="w-full flex items-center p-4 px-6 text-2xl border-b border-zinc-600 mb-8 box-border">
      <HambergerMenu isClick={isClick} setIsClick={setIsClick} />
      <Link to="/" className="flex items-center" onClick={hiddenSearchBar}>
        <BsYoutube className="text-3xl text-brand" />
        <h1 className=" ml-1 text-2xl font-logo font-medium tracking-tight">
          YouTube
        </h1>
      </Link>
      <form
        id="searchBox"
        className="w-full flex justify-center max-[640px]:justify-end"
        onSubmit={handleSubmit}
      >
        <input
          id="searchBar"
          className="w-5/12 pl-4 border border-zinc-600 text-base text-black rounded-s-full max-[640px]:hidden max-[640px]:searchbar"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-zinc-200 px-6 rounded-e-full border border-zinc-600 border-l-0 dark:text-black max-[640px]:bg-transparent border-none"
          onClick={showSearchBar}
        >
          <BsSearch className="text-base max-[640px]:dark:text-white" />
        </button>
      </form>
      <Darkmode />
    </header>
  );
}
