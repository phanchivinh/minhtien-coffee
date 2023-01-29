import React from 'react'

import images from '../../../../assets/images'
import './VisionMission.css'
const VisionMission = () => {
  return (
    <section id='tam-nhin' className='visionMission section-block'>
        <h3 className='section-heading'>Tầm nhìn & sứ mệnh</h3>
        <div className='visionMission__wrapper'>
            {/* Vision block */}
            <div className='VisionMission__content'>
                <div className='visionMission__subHeader'>Tầm nhìn</div>
                <div className='visionMission__description'>
                    <h5>Nâng tầm giá trị của hạt cà phê Việt Nam</h5>
                    <p>Phát triển chuỗi giá trị cà phê bền vững để nâng tầm giá trị cà phê Arabica Việt Nam Với chất liên kết là tình yêu cà phê, Minh Tiến luôn cố gắng là cầu nối gắn kết và lan toả hạnh phúc từ nông hộ, đối tác – khách hàng đến người tiêu dùng và cộng đồng.</p>
                </div>
            </div>

            {/* Mission Block */}
            <div className='VisionMission__content'>
                <div className='visionMission__subHeader'>Sứ mệnh</div>
                <div className='visionMission__description'>
                    <h5>Minh Tiến mong muốn giúp người tiêu dùng khám phá lại hương vị cà phê nguyên bản</h5>
                    <p>Mục tiêu của chúng tôi là tái định nghĩa và khám phá lại hương vị cà phê nguyên bản yêu thích mỗi ngày bằng sản phẩm tâm huyết của từng người trồng cà phê, đồng thời truyền cảm hứng kết nối mọi người bằng tình yêu cà phê, giúp mọi người hiểu thêm về tầm vóc cà phê Việt và bản sắc vùng nguyên liệu.</p>
                </div>
            </div>

        </div>
        <div className='visionMission__image'>
            <img src={images.visionMissionContent} alt='content'/>
        </div>
    </section>
  )
}

export default VisionMission