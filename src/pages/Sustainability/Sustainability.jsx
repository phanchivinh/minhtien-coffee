import React, { useEffect } from 'react'

import { Origin, Factor, Economy, Society, Environment, ManufactureSection } from './components'
import videos from '../../assets/videos'
import VideoIntro from '../../components/VideoIntro/VideoIntro'
const Sustainability = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className='sustainability'>
        <VideoIntro videoSrc={videos.videoMinhTien1} text='Chuỗi cung ứng bền vững được dựa trên giá trị hạnh phúc và nguyên bản' />
        <Origin />
        <Factor />
        <Economy />
        <Society />
        <Environment />
        <ManufactureSection />
    </div>
  )
}

export default Sustainability