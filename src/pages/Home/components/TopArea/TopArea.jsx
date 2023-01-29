import React, { useRef } from 'react'

import PatchDrawing from '../../../../components/PatchDrawing/PatchDrawing'
import './TopArea.css'
import images from '../../../../assets/images'

const TopArea = () => {
  const topRef = useRef();

  const handleScroll = () => {
    const topAreaBottom = topRef.current.scrollTop + topRef.current.clientHeight;
    window.scrollTo(0,topAreaBottom);
  }
  return (
    <section className='topArea green-background' ref={topRef}>
      <div className='topArea__wrapper'>
          <div className='topArea__wrapper-image' style={{animationDelay: '0ms'}}>
              <img src={images.cofffeeIllustration} alt='coffee-illustration' />
          </div>
          <div className='topArea__wrapper-content'>
              <h1>MINH TIEN COFFEE</h1>
              <h3>
                <div>Minh Tiến ra đời với khát vọng</div>
                <div>nâng tầm giá trị của hạt cà phê Việt Nam.</div>
              </h3>
              <p>Tham Gia Hành Trình Cùng Chúng Tôi</p>
              <span>
                <img src={images.arrowAround} alt='next-section-btn' onClick={handleScroll}/>
              </span>
          </div>
      </div>
      <PatchDrawing />
      
    </section>
  )
}

export default TopArea