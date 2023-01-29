import React, { useEffect, useState } from 'react';

import './ScrollHeight.css';

const ScrollHeight = () => {
  const maxHeights = [2100, 1800, 1400, 800];
  const [scrollY, setScrollY] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.round((winScroll / height) * 300);
    setScrollY(Math.round(scrolled));
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [scrollY])

  return (
    <div className='scrollHeight' id='scroll-height'>
      {maxHeights.map((height, index) => (
          <div key={'scroll-height' + index}>{(height - scrollY) + 'm'}</div>
      ))}
    </div>
  )
}

export default ScrollHeight