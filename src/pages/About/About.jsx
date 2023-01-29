import React, { useEffect } from 'react'

import VideoIntro from '../../components/VideoIntro/VideoIntro';
import videos from '../../assets/videos';
import { Story, Journey, Milestones, VisionMission, CoreValue, Certification, Partner } from './components'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='about'>
        <VideoIntro videoSrc={videos.videoMinhTien1} text={`Theo chân chúng tôi \n đi tìm hạnh phúc từ hạt cà phê`}/>
        <Story />
        <Journey />
        <Milestones />
        <VisionMission />
        <CoreValue />
        <Certification />
        <Partner />
    </div>
  )
}

export default About