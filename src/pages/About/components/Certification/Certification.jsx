import React from 'react'


import images from '../../../../assets/images'
import './Certification.css'

const Certification = () => {
  return (
    <section id='chung-nhan' className='certification section-block'>
        <h3 className='section-heading'>Chứng nhận</h3>
        <div className='certification__wrapper'>
            <h4>Đam mê để làm tốt hơn</h4>
            <p>Trải qua 20 năm chuyên môn và kiến thức về cà phê, Minh Tien Coffee đặt mục tiêu được công nhận là đối tác kinh doanh hàng đầu trong lĩnh vực cà phê xanh hạt arabica từ cao cấp đến phục vụ cho specialty thông qua các tiêu chuẩn chất lượng khắt khe.</p>
            <div className='certification__logo'>
                <img src={images.certificationLogo1} alt='c-logo1' />
                <img src={images.certificationLogo2} alt='c-logo2' />
            </div>
        </div>
    </section>
  )
}

export default Certification