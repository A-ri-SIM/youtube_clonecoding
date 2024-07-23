import React, { useEffect, useState } from 'react';
import { IoMoonSharp } from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';

export default function Darkmode() {
  const htmlEl = document.querySelector('html');
  const [buttonTheme, setButtonTheme] = useState(false);
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      setButtonTheme(true);
    }
  }, []);

  const ToggleDarkMode = () => {
    if (!htmlEl) return;
    const enabledDarkMode = htmlEl.classList.contains('dark');

    if (enabledDarkMode) {
      htmlEl.classList.remove('dark');
      localStorage.theme = 'light';
      setButtonTheme(false);
    } else {
      htmlEl.classList.add('dark');
      localStorage.theme = 'dark';
      setButtonTheme(true);
    }
  };

  return (
    <button onClick={ToggleDarkMode}>
      {!buttonTheme && <IoMoonSharp />}
      {buttonTheme && <IoMdSunny />}
    </button>
  );
}
