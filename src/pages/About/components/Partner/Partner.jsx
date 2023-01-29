import React from 'react'

import { partnerLogos } from '../../../../assets/images'
import './Partner.css'
const Partner = () => {
  return (
    <div id='doi-tac' className='partner section-block'>
        <h3 className='section-heading'>Đối tác</h3>
        <div className='partner__wrapper'>
            <h4>Khát vọng để vươn biển lớn</h4>
            <p>Chúng tôi cung cấp cà phê cho các đối tác hàng đầu trên thế giới và phân phối cà phê trên toàn quốc. Chúng tôi thích làm việc với tất cả các đối tác để chia sẻ những hạt cà phê ngon nhất đến những người yêu thích cà phê.</p>
            <div className='partner__logo'>
                {partnerLogos.map((logo,index) => (
                  <img src={logo} alt={`partner-logo-${index}`} key={`partner-logo-${index}`} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Partner