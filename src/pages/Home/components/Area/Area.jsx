import React, { useEffect, useState } from 'react';

import images from '../../../../assets/images';
import areasData from '../../../../assets/data/areasData';
import './Area.css';

const Area = () => {

  const [show, setShow] = useState(0)

  const handleNext = () => {
    setShow(show >= areasData.length-1 ? 0 : show + 1)
  }

  const handlePrevious = () => {
    setShow(show <= 0 ? areasData.length-1 : show - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
        handleNext()
    }, 5000)

    return () => clearInterval(interval)
  })
  return (
    <section id='vung-trong' className='areas section-block'>
        <h3 className='section-heading'>Vùng Trồng</h3>

        <div className='areas__wrapper'>
          <div className='areas__slider'>
              <button className='areas__prevBtn areas__slider-arrow' onClick={handlePrevious}>
              </button>
              <div className='areas__list'>
                  <div className='list-track'>
                    {areasData.map((area, index) => (
                      <div
                          key={'areas__item' + index}
                          className= {`areas__item ${show === index ? 'faded' : ''}`}
                          style={{position: 'relative', left: `-${index*25}%`, top: '0'}}
                        >
                        <div className='areas__item-map'>
                            <div className='line-map'>
                                <img src={images.areasBackground} alt='areas-background' />
                            </div>
                            <div className='dot-map'>
                              <img src={area.img} alt={area.alt} />
                            </div>
                        </div>
                        <div className='areas__item-infos'>
                          <h3>Nông trại<br/>{area.name}</h3>
                          <div className='areas-meta'>
                            <p className='h6'>Ví trí</p>
                            <p>{area.location}</p>
                          </div>
                          <div className='areas-meta'>
                            <p className='h6'>Cao độ</p>
                            <p>{area.altitude}</p>
                          </div>
                          <div className='areas-meta'>
                            <p className='h6'>Diện tích</p>
                            <p>{area.area}</p>
                          </div>
                          <div className='areas-meta'>
                            <p className='h6'>Sản lượng</p>
                            <p>{area.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className='areas__nextBtn areas__slider-arrow'  onClick={handleNext}>
                </button>
            </div>
        </div>  
    </section>
  )
}

export default Area