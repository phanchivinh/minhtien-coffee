import React, { useEffect, useRef, useState } from 'react'


import brandHistory from '../../../../assets/data/brandHistory'
import './Milestones.css'

const Milestones = () => {
  const timeRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const [translatePixel, setTranslatePixel] = useState(0);

  const handleUp = () => {
    console.log(activeIndex);
    if(activeIndex > 0) {
      setActiveIndex(prev => prev - 1)
    }
  }

  const handleDown = () => {
    if(activeIndex < brandHistory.length -1) {
      setActiveIndex(prev => prev + 1)
    }
  }

  useEffect(() => {
    setHeight(timeRef.current.offsetHeight);
    setTranslatePixel(-(activeIndex * height))
  },[height, translatePixel, activeIndex])


  return (
    <section id='cot-moc' className='milestones section-block'>
        <div className='milestones__wrapper'>

            <div className='milestones__times'>
              <button className='milestones__upBtn milestone-arrow' onClick={() => handleUp()} style={{opacity: `${activeIndex === 0 ? '0' : '1'}`}}></button>
                <div className='milestones__times-container'>
                  {brandHistory.map((brandEvent, index) => (
                    <span 
                        className={index === activeIndex ? 'active' : ''} 
                        ref = {timeRef}
                        key={'milestones-times-' + index}
                        onClick = {() => setActiveIndex(index)}
                        style = {{transform: `translateY(${translatePixel}px)`}}
                    >
                        {brandEvent.time}
                    </span>
                  ))}
                </div>
                <button className='milestones__downBtn milestone-arrow' onClick={() => handleDown()} style={{opacity: `${activeIndex === brandHistory.length-1 ? '0' : '1'}`}}></button>
            </div>
            <div className='milestones__event'>
                <h4>Các cột mốc</h4>
                <h5>Cuộc hành trình đi tìm giá trị nguyên bản</h5>
                <div className='milestones__event-content'>
                    {brandHistory.map((brandEvent, index) => (
                      <p className={index === activeIndex ? 'active' : ''}  key={'milestones-content-' + index}>
                          {brandEvent.content}
                      </p>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Milestones