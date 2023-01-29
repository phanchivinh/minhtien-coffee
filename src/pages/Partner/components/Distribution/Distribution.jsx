import React from 'react'

import {factorIcons} from '../../../../assets/images'
import './Distribution.css'
const Distribution = () => {
  return (
    <section id='phan-phoi' className='distribution section-block'>
        <h3 className='section-heading'>Phân phối</h3>
        <div className='distribution__wrapper'>
            <div className='distribution__text'>
                <h4>Các kênh phân phối</h4>
                <p>Liên hệ với chúng tôi nếu bạn muốn trở thành đối tác <br /> phân phối cà phê Minh Tiến</p>
            </div>
            <div className='distribution__slider'>
                <div className='distribution__slider-item'>
                    <img src={factorIcons[0].path} alt='Chuoi-sieu-thi' />
                    <h5>Chuỗi siêu thị</h5>
                    <p>
                        Intimex Home & Food
                        <br/>
                        Hapro Mart
                        <br/>
                        Seika Mart
                        <br/>
                        Fuji Mart
                        <br/>
                        Big C
                    </p>
                </div>
                
                <div className='distribution__slider-item'>
                    <img src={factorIcons[1].path} alt='coffee-shop'/>
                    <h5>Coffee Shop</h5>
                    <p>
                        31 Bà Triệu - P. Hàng Bài - Q. Hoàn Kiếm - Hà Nội.
                        <br />
                        75 Hàng Mã - P. Hàng Mã - Q. Hoàn Kiếm - Hà Nội.
                        <br />
                        45B Lý Thường Kiệt - P. Trần Hưng Đạo - Q.Hoàn Kiếm - Hà Nội.
                        <br />
                        45 Lê Đại Hành - P. Lê Đại Hành - Q. Hai Bà Trưng - Hà Nội.
                    </p>
                </div>

                <div className='distribution__slider-item'>
                    <img src={factorIcons[2].path} alt='nha-phan-phoi' />
                    <h5>Nhà phân phối</h5>
                </div>
            </div>
            <a className='readmore-link' href='#contact-info'>Xem các địa điểm hiện đang có sản phẩm Minh Tiến</a>
        </div>
    </section>
  )
}

export default Distribution