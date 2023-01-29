import React, { useState, useRef, useEffect, useCallback } from 'react'

import valueOrigin from '../../../../assets/data/valueOrigin'
import './ValueOrigin.css'

const ValueOrigin = () => {
  const sectionRef = useRef();
  const pinRef = useRef()
  const sliderRef = useRef()
  const [pinTop, setPinTop] = useState();
  const [pinIndex, setPinIndex] = useState(0);
  const [isTrigger, setIsTrigger] = useState(false);
  
  const getActivatedPinIndex = () => {
    const winScrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
    const itemBottomList = Array.from(sliderRef.current.children).map((child,index) => {
      return (child.clientHeight + child.offsetTop)
    })

    for(let i = 0; i<itemBottomList.length; i++) {
      if(winScrollBottom >= itemBottomList[i]) {
        setPinIndex(i);
      }
    }
    // const winScrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;

    // for(let i=0; i<valueOrigin.length; i++) {
    //   const itemBottom = sliderRef.current.children[i].clientHeight + sliderRef.current.children[i].offsetTop;
    //   console.log('itemBottom ' + i + ' ' + itemBottom);
    //   if(winScrollBottom >= itemBottom) {
    //     return i;
    //   }
    // }
  }

  const handleTrigger = useCallback(() => {
    const sectionTrigger = sectionRef.current.offsetTop;
    const winScroll = document.documentElement.scrollTop;
    const winScrollBottom = winScroll + document.documentElement.clientHeight;
    const sectionHeight = sectionRef.current.offsetTop + sectionRef.current.clientHeight;

    if(winScroll > sectionTrigger && winScrollBottom < sectionHeight) {
      setIsTrigger(true);
    } else {
      setIsTrigger(false);
    }
  }, [])

  const handlePinTop = useCallback(() => {
    const pinOffsetTop = sliderRef.current.offsetTop;
    const scroll = document.documentElement.scrollTop - sectionRef.current.offsetTop;

    if(isTrigger && scroll > 0) {
      setPinTop(pinOffsetTop + scroll);
    }
  }, [isTrigger])

  useEffect(() => {
    window.addEventListener('scroll', handleTrigger);
    window.addEventListener('scroll', handlePinTop);
    window.addEventListener('scroll', getActivatedPinIndex);
    

    return () => {
      window.removeEventListener('scroll', handleTrigger);
      window.removeEventListener('scroll', handlePinTop);
      window.removeEventListener('scroll', getActivatedPinIndex);

    }
  },[handleTrigger, handlePinTop])

  return (
    <section className='valueOrigin section-block' ref={sectionRef}>
      <h3 className='section-heading'>Giá trị nguyên bản</h3>
      <div className='valueOrgin__wrapper'>
          <div className='valueOrigin__dots' id='value-orgin-pin' style={{top: pinTop}} ref={pinRef}>
              {valueOrigin.map((value, index) => (
                <a className={`${index === pinIndex ? 'active-slider' : ''}`} href={`#slide-${index}`} key={'pin ' + index}>{value.order}</a>
              ))}
          </div>

          <div className='valueOrigin__slider' ref={sliderRef}>
              {valueOrigin.map((value, index) => (
                <div id={`slide-${index}`} className='valueOrigin__item' key={'value-origin ' + index}>
                    <article>
                        <div>
                            <h4>{value.title}</h4>
                            <p>{value.description}</p>
                        </div>
                        <img  src={value.img} alt={`Gia tri nguyen ban ${value.order}`}/>
                    </article>
                </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default ValueOrigin