import React, { useEffect } from 'react'

import FakeHeader from '../../components/FakeHeader/FakeHeader'
import { Factory, ManufactureProcess, ManufactureImage } from './components'
import videos from '../../assets/videos'
import VideoIntro from '../../components/VideoIntro/VideoIntro'
import Area from '../Home/components/Area/Area'
import { manufacturingImages } from '../../assets/images'
const Manufacture = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className='manufacture'>
        <FakeHeader imageSrc={manufacturingImages.fakeheader} altText='Manufacture-header' />
        <Factory />
        <Area />
        <ManufactureProcess />
        <VideoIntro videoSrc={videos.videoMinhTien1} />
        <ManufactureImage />
    </div>
  )
}

export default Manufacture