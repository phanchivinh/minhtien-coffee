import React from 'react'

import { sustainabilityImages } from '../../../../assets/images'
import './Society.css'
const Society = () => {
  return (
    <section id='xa-hoi' className='society section-block'>
        <h3 className='section-heading'>Xã hội</h3>
        <div className='society__wrapper'>
            <div className='society__image'>
                <img src={sustainabilityImages.society} alt='Society' />
            </div>

            <div className='society__content'>
                <h4>Cộng đồng</h4>
                <div className='society__content-text'>
                    <p>Cộng đồng bản địa là trung tâm cho các hoạt động của chúng tôi. Chúng tôi hòa nhập vào cuộc sống của họ, đào tạo, chia sẻ kiến thức nông nghiệp.</p>
                    <p>Cộng đồng bản địa là trung tâm cho các hoạt động của chúng tôi. Chúng tôi hòa nhập vào cuộc sống của họ, đào tạo, chia sẻ kiến thức nông nghiệp</p>
                </div>
                <div className='society__content-last'>
                    <p>“ĐỂ CÓ NHỮNG TÁCH CAFE NGON CHO KHÁCH HÀNG VÀO NGÀY MAI, CHÚNG TA PHẢI GIÚP CỘNG ĐỒNG NGƯỜI TRỒNG CAFE PHÁT TRIỂN HÔM NAY”.</p>
                </div>
            </div>

            <div className='society__content'>
                <h4>Người tiêu dùng</h4>
                <div className='society__content-text'>
                    <p>Hãy thưởng thức ngụm cafe thanh ngọt như mật ong từ các dải sơn nguyên và yên tâm rằng bạn là một mảnh ghép quan trọng trong chuỗi giá trị cafe bền vững.</p>
                    <p>Bạn đang đóng góp tích cực đến cuộc sống của người trồng cafe tương lai của những nông hộ đứng sau tách cafe chất lượng thơm ngát hàng ngày</p>
                </div>
                <div className='society__content-last'>
                    <img src={sustainabilityImages.consumer} alt='consumer' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Society