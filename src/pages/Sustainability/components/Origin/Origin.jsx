import React from 'react'

import './Origin.css';
import { sustainabilityImages } from '../../../../assets/images';
const Origin = () => {
  return (
    <section id='nguyen-ban' className='origin section-block'>
        <h3 className='section-heading'>Nguyên bản</h3>
        <div className='origin__wrapper'>
          <div className='origin__content'>
              <h4>Tại Minh Tiến, chúng tôi tin vào chuỗi cung ứng bền vững được dựa trên giá trị hạnh phúc và nguyên bản</h4>
              <p className='block1'>Sự bền vững về kinh tế, môi trường, xã hội có thể đo lường được trong mọi việc chúng tôi làm. Với chúng tôi, đó là hành trình với sự cải tiến liên tục và thúc đẩy thông qua quan hệ đối tác trong chuỗi cung ứng.</p>
              <p className='block2'>Các vùng trồng và nông trại của Minh Tiến được xây dựng dựa trên sự cam kết vì mục tiêu: đưa hạt cà phê về lại đúng với giá trị nguyên bản.</p>
          </div>
          <div className='origin__image'>
              <img src={sustainabilityImages.original} alt='farm household' />
          </div>
        </div>
    </section>
  )
}

export default Origin