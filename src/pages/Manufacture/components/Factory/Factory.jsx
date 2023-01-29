import React from 'react'

import { manufacturingImages } from '../../../../assets/images'
import './Factory.css'
const Factory = () => {
  return (
    <section id='nha-xuong' className='factory section-block'>
        <h3 className='section-heading'>Nhà xưởng</h3>
        <div className='factory__wrapper'>
            <img src={manufacturingImages.factory1} alt='nha-xuong'/>
            <div className='factory__content'>
                <div className='factory__content-block'>
                    <h6>Nhà xưởng</h6>
                    <h5>NHÀ MÁY CỦA NHỮNG ƯỚC MƠ</h5>
                    <p>Nhà máy sơ chế cà phê của Minh Tiến luôn được đặt ngay tại vùng trồng để đảm bảo quả tươi luôn được làm sạch trong vòng 24h kể từ khi hái.</p>
                    <p>Chúng tôi dồn toàn bộ tâm huyết, sức lực để đảm bảo tính nguyên bản của hạt cà phê. Từ đây, chúng tôi nuôi dưỡng khát vọng nâng tầm giá trị cà phê qua từng khâu chế biến hằng ngày</p>
                </div>

                <div className='factory__content-block'>
                    <h6>Nhà xưởng</h6>
                    
                </div>
            </div>
        </div>
        <div className='factory__images'>
            <img src={manufacturingImages.factory2} alt='nha-xuong-2' />
            <img src={manufacturingImages.factory3}  alt='nha-xuong-3'/>
        </div>3    </section>
  )
}

export default Factory