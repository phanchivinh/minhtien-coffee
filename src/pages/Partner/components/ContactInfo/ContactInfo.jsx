import React from 'react'

import './ContactInfo.css'
const ContactInfo = () => {
  return (
    <section id='contact-info' className='contactInfo section-block'>
        <div className='contactInfo__wrapper'>
            <h3>Thông tin <br /> liên hệ</h3>
            <div className='contactInfo__description'>
                <p className='c1'>
                    <span>Cở sở 1</span>
                    Số 45 Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội
                </p>
                <p className='c2'>
                    <span>Cơ sở 2</span>
                    Số 45b Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội
                </p>
                <p className='c3'>
                    <span>Trụ sở</span>
                    Geleximco Building số 36 Hoàng Cầu,
                    <br />
                    Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội
                </p>
                <p className='c4'>
                    <span>Phone</span>
                    0372.589.589
                </p>
                <p className='c5'>
                    <span>Mobile</span>
                    0242.20.44.666
                </p>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo