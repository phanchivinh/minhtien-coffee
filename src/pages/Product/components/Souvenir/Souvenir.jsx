import React from 'react'


import './Souvenir.css'
import images, { souvenirImages } from '../../../../assets/images'
const Souvenir = () => {
  return (
    <section className='souvenir section-block'>
        <h3 className='section-heading'>Minh Tien souvenir</h3>
        <div className='souvenir__wrapper'>
            <div className='souvenir__intro'>
                <p>Qua nhiều năm, Minh Tiến đã phát triển thành một trong những thương hiệu về lối sống được yêu thích nhất, tập hợp nhiều loại sản phẩm, con người và ý tưởng trong một không gian.</p>
                <div className='souvenir__divider'>
                    <img src={images.souvenirDivider} alt='divider'/>
                </div>
            </div>
            <div className='souvenir__images'>
                {souvenirImages.map((img, index) => (
                    <img src={img} key={'img' + index} alt={`souvenir ${index}`} />
                ))}
            </div>
            <div className='souvenir__footer'>
                <p className='souvenir__footer-text'>Định hướng của chúng tôi về mỗi không gian thưởng thức cà phê là độc đáo và đặc biệt ở mỗi kiến trúc, trải nghiệm và cà phê đều mang đến các giá trị nguyên bản.</p>
                <p className='souvenir__footer-address'>
                    75 Hàng Mã,
                    <br />
                    Phường Hàng Mã
                    <br />
                    Quận Hoàn Kiếm,
                    <br />
                    TP. Hà Nội.
                </p>
                <p className='souvenir__footer-time'>
                    Mở cửa mỗi ngày
                    <br />
                    7:00 am - 10:00 pm
                    <br />
                    Tel: +842 3741 932
                </p>
                <a href='/' className='readmore-link'>Tìm hiểu thêm</a>
            </div>
        </div>
    </section>
  )
}

export default Souvenir