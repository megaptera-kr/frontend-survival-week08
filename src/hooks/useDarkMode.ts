import { useCallback, useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('theme');
    if (getTheme) {
      setDarkMode(JSON.parse(getTheme));
    }
  });

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('theme', JSON.stringify(!isDarkMode));
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
