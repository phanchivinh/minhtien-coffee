import React from 'react'
import {Link} from 'react-router-dom';

import images from '../../../../assets/images'
import './SustainableValue.css'

const SustainableValue = () => {
  return (
    <section className='sustainableValue'>
      <h3 className='section-heading'>Giá trị bền vững</h3>
      <div className='sustainableValue__container'>
        <div className='sustainableValue__wrapper'>
          <article>
            <p className='block1'>Sự bền vững về kinh tế, môi trường, xã hội có thể đo lường được trong mọi việc chúng tôi làm. Với chúng tôi, đó là hành trình với sự cải tiến liên tục và thúc đẩy thông qua quan hệ đối tác trong chuỗi cung ứng.</p>
            <p className='block2'>Các vùng trồng và nông trại của Minh Tiến được xây dựng dựa trên sự cam kết vì mục tiêu: đưa hạt cà phê về lại đúng với giá trị nguyên bản.</p>
            <Link href='ben-vung' className='readmore-link'>Tìm hiểu thêm</Link>
          </article>
        </div>
        <div className='sustainableValue__img'>
          <img src={images.gtbv} alt='gia-tri-ben-vung' />
        </div>
      </div>
    </section>
  )
}

export default SustainableValue