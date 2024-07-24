import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export default function Description({ description }) {
  const [toggle, setToggle] = useState(false);
  const buttonToggle = () => {
    const desBtn = document.querySelector('#decriptionBtn');

    if (toggle === false) {
      desBtn.classList.add('line-clamp-none');
    } else {
      desBtn.classList.remove('line-clamp-none');
    }
    setToggle(!toggle);
  };
  return (
    <pre
      id="decriptionBtn"
      className="whitespace-pre-wrap font-roboto line-clamp-3 bg-zinc-200 p-4 pb-6 rounded-lg relative dark:bg-zinc-700"
    >
      {description}
      <button
        onClick={buttonToggle}
        className="absolute right-2.5 bottom-0.5 text-2xl duration-300 hover:scale-125"
      >
        {toggle === false && <TiArrowSortedDown />}
        {toggle === true && <TiArrowSortedUp />}
      </button>
    </pre>
  );
}
