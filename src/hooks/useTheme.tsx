/* eslint-disable operator-linebreak */
import { useCallback, useLayoutEffect, useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light');

  const onChangeTheme = useCallback(() => {
    const updateTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updateTheme);
    localStorage.setItem('theme', updateTheme);
  }, [theme]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    // if (
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches
    // ) {
    //   setTheme('dark');
    // }
  }, []);

  return { theme, onChangeTheme };
}

export default useTheme;
