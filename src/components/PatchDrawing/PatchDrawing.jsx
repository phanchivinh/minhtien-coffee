import React, { useState, useEffect, useRef, useCallback } from 'react'

import './PatchDrawing.css'

const PatchDrawing = () => {
  const pathRef = useRef();
  const drawRef = useRef();
  // const triggerRef = useRef();
  const [scrollTop, setScrollTop] = useState(2510);
  const [isTrigger, setTrigger] = useState(false);
  const [y, setY] = useState(window.scrollY);

  // let triggerRef = useRef();

  const handleTrigger = () => {
    const windowScrollBottom = document.documentElement.scrollTop + window.innerHeight;
    const triggerOffsetTop = drawRef.current.offsetTop * 1.5;
    // console.log(triggerRef.current.offsetTop);
    if (windowScrollBottom >= triggerOffsetTop) {
      setTrigger(true);
    }
  }
  
  const onScroll = useCallback(
    e => {
      const windowScroll = e.currentTarget.scrollY;
      const offsetTop = drawRef.current.offsetTop * 1.25;
      const heightViewPort = window.innerHeight;

      const windowScrollBottom = Math.round(windowScroll) + heightViewPort;
      const drawingNumber = (windowScrollBottom - offsetTop) * 2;


      if (y < window.scrollY) { //check if scroll down
        const strokeDashoffset = pathRef.current.style.strokeDashoffset;
        setScrollTop(() => {
          if (strokeDashoffset > 0) {
            return 2510 - drawingNumber
          }
        })
      }
      setY(window.scrollY);
    }, [y]
  )

  useEffect(() => {
    if (isTrigger) {
      window.addEventListener('scroll', onScroll)
      window.addEventListener('touchmove', onScroll)
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll)
    }
  }, [isTrigger, onScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleTrigger);
    window.addEventListener('touchmove', handleTrigger);
    return () => {
      window.removeEventListener('scroll', handleTrigger);
      window.removeEventListener('touchmove', handleTrigger);
    };
  }, [onScroll])

  return (
    <div className='patchDrawing' ref={drawRef}>
      <div className='drawing-container'>
          <svg version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 270 1924.6"
            style={{width: '270px', height:'1924px'}}
            xmlSpace="preserve"
          >
            <path
              className="home-path" ref={pathRef}
              d="M154.6,1872.3c4.4-20.8-2.7-21.8,5.5-41.4c7.2-17.2,11.4-13.5,22.1-28.8s16.7-15.6,17.1-34.3
            c0.5-22.3-21.3-17.1-26-38.9c-4.8-22.4,17.9-23.6,18.6-46.5s-23.4-24.1-21.8-46.9c1.2-17.3,17.8-16,19.8-33.2
            c2-17.3,2.1-17.3,4.1-34.6s-10.1-18.7-8.1-36.1s22-17.8,19.3-35c-2.5-15.7-6.2-17.2-13.2-31.5s-28.3-3.9-35.3-18.2s19.5-35,7.2-45
            c-12.4-10.2-26.1,15-41.6,10.9s-16.2-1.4-31.8-5.5s-15.3-9.9-27.6-20.3c-13.1-11-18.7-9.5-26.3-24.8s-1-18.6-8.7-33.9
            c-7.6-15.4,3.6-21-4.1-36.3s-24.2-10-22.9-27.1c1.3-16.5,7.5-15.2,17.4-28.5s10.6-12.7,20.5-26s5.9-18.6,19-28.6
            c13.9-10.5,20.2,0.5,36.3-6c16.2-6.5,10.5-20.6,26.7-27.1s23.7,12.2,39.9,5.7s29.3-2.6,35-19.1c5.9-16.8-2.1-24.3-10.5-40
            c-8.5-15.7-19.8-9.6-28.2-25.3s-16-11.6-24.5-27.4s-9.7-16.4-5.2-33.7c4.8-18.4,15.5-5.2,30.9-16.3s15.3-11.4,30.7-22.5
            s16.3-11.4,30.5-24.1c8.6-7.7,17.2-19.9,9.5-30.8s-15.3-25.8-9.6-34.3s11.9-21.2,3.7-35.3s15.4-20.2,2.1-35.6
            c-16.4-11.4-25,0.9-41.4-10.6s-9.1-14.9-13.8-34.4c-5-20.6,6.5-10.8,15.5-30s-1.1-23.9,8-43.1s11.2-16.6,24.2-33.4
            c12.5-16.2,15.8-11.8,26.5-29.3c19.8-32.2,7.6-42.3-5.3-79s20.9-30.2,1.5-54.7c-19.4-24.5-37.3-24.5-51-48.3s-1-38.1-20-43.7
            s-24.3,12.2-43.3,6.6s-26.1,1.2-40.7-12.1c-12.8-11.6,11.7-25.6,6.3-42.1S81.5,341,76.1,324.5s-32.5-12.5-33-29.8
            c-0.6-18.7,21.5-18,25.8-36.2s13.6-16.1,17.9-34.3s-13.2-19-15.9-37.6C68.5,170.3,70,173.7,61,160s-13.8-10.7-22.9-24.4
            s-3-18-7.2-33.9c-4-15.2,3.3-14.7,4.6-30.4s10.6-14.9,11.9-30.5"
              id="line"
              style={{ strokeDasharray: '2510px', strokeDashoffset: scrollTop, opacity: '1' }}
            ></path>
          </svg>
      </div>
    </div>
  )
}

export default PatchDrawing