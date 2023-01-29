import React, { useRef } from 'react'

import images from '../../assets/images';
import './VideoIntro.css'

const VideoIntro = ( { videoSrc, text } ) => {
  const videoRef = useRef();

  const handleScroll = () => {
    const videoBottom = videoRef.current.scrollTop + videoRef.current.clientHeight;
    window.scrollTo(0,videoBottom);
  }

  return (
    <div className='video-intro' ref={videoRef}>
      <div className='mask-container' >
          <video muted loop autoPlay playsInline poster={images.videothump1} >
              <source src={videoSrc} type='video/mp4' />
          </video>
      </div>
      {text && (
        <div className='video-content'>
            <h5>{text.replace(/(?:\r\n|\r|\n)/g, '\n')}</h5>
            <span>
                <img src={images.arrowAround} alt='next-section-btn' onClick={handleScroll} />
            </span>
        </div>
      )}
    </div>
  )
}

export default VideoIntro