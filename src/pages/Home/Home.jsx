import React, { useEffect} from 'react'

import VideoIntro from '../../components/VideoIntro/VideoIntro';
import videos from '../../assets/videos';
import { Area, CoffeeShop, FeatureProduct, News, SustainableValue, TopArea, ValueOrigin } from './components';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='home' id='home'>
      <TopArea />
      <VideoIntro videoSrc={videos.videoMinhTien1}/>
      <FeatureProduct />
      <Area />
      <ValueOrigin />
      <CoffeeShop />
      <SustainableValue />
      <News />
    </div>
  )
}

export default Home