import React from 'react'

import { registerIcon } from '../../../../assets/images'
import './Registration.css'
const Registration = () => {
  return (
    <section id='dang-ky' className='registration section-block'>
        <h3 className='section-heading'>Đăng ký</h3>
        <div className='registration__wrapper'>
            <h4>Cà phê mỗi ngày, mọi lúc, mọi nơi</h4>
            <p>Hãy xem bộ sưu tập sản phẩm tuyển chọn của bạn ngay hôm nay.</p>
            <div className='registration__slider'>
                <div className='registration__slider-item'>
                    <img src={registerIcon[0].path} alt={registerIcon[0].name}/>
                    <h5>Chọn loại cà phê</h5>
                    <p>Chọn loại cà phê đúng theo gu của bạn</p>
                </div>

                <div className='registration__slider-item'>
                    <img src={registerIcon[1].path} alt={registerIcon[1].name} />
                    <h5>Chọn lịch giao hàng</h5>
                    <p>Chọn thời gian để tách cà phê nóng hổi có mặt kịp thời ngay lúc bạn cần.</p>
                </div>

                <div className='registration__slider-item'>
                    <img src={registerIcon[2].path} alt={registerIcon[2].name} />
                    <h5>Giao hàng đến muôn nơi</h5>
                    <p>Bất cứ nơi nào, bạn cũng có thể nhận cà phê tươi ngon ngay tức thì.</p>
                </div>
            </div>
            <a className='readmore-link' href='#lien-he'>Liên hệ với chúng tôi để biết thêm chi tiết</a>
        </div>
    </section>
  )
}

export default Registration