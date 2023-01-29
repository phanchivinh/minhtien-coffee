import React from 'react'

import images from '../../../../assets/images'
import './Journey.css'
const Journey = () => {
  return (
    <section id='hanh-trinh' className='journey section-block' style={{backgroundImage: `url(${images.journeyBackground})`}}>
        <div className='journey__wrapper'>
            <div className='journey__title'>
                <h6>
                    Hành trình trên những
                    <br/>
                    dãy sơn nguyên
                </h6>
            </div>

            <div className='journey__content'>
                <article>Hành trình của hạt cà phê khởi đầu bằng hàng nghìn nụ hoa trắng xoá đầy hương sắc, hấp thụ tinh hoa đất trời, tâm sức con người và văn hoá bản địa, tạo nên hương vị đánh thức cảm hứng người dùng.</article>
                <article>Giá trị thực mà Minh Tiến tâm huyết truyền tải trong từng tách cà phê chính là hương vị nguyên bản nơi hạt cà phê được sinh ra, những vùng nguyên liệu từ Tây Bắc, Quảng Trị cho đến Lào.</article>
                <div className='journey__readmore'>
                  <a href='san-xuat' className='readmore-link'>Đến trang sản xuất</a>
                  <a href='san-pham' className='readmore-link'>Đến trang sản phẩm</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Journey