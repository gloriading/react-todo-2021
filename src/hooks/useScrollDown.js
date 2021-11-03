import{ useState, useEffect } from 'react';

const useScrollDown = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const DISTANTCE_FROM_TOP = 190;
      if (window.scrollY > DISTANTCE_FROM_TOP) {
        setIsScrollDown(true)
      } else {
        setIsScrollDown(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollDown;
}

export default useScrollDown;