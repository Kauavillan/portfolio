import { useEffect, useState, createContext } from 'react';

export const windowSizeContext = createContext(); 

const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <windowSizeContext.Provider value={{windowSize, setWindowSize}}>{children}</windowSizeContext.Provider>;
};

export default WindowSizeProvider;