import React from 'react'

import { partnersImages } from '../../../../assets/images'
import './FarmHousehold.css'
const FarmHousehold = () => {
  return (
    <section id='nong-ho' className='farmHousehold section-block'>
        <h3 className='section-heading'>Nông hộ</h3>
        <div className='farmHousehold__wrapper'>
            <div className='farmHousehold__passion'>
                <img src={partnersImages.passion} alt='dam-me' />
                <div className='farmHousehold__passion-text'>
                    <h4>Cùng chia sẻ tình yêu cà phê</h4>
                    <a className='readmore-link' href='#lien-he'>Liên hệ với chúng tôi</a>
                </div>
            </div>

            <div className='farmHousehold__benefit'>
                <h4>Quyền lợi</h4>
                <div className='farmHousehold__benefit-text'>
                    <div className='farmHousehold__benefit-text-item'>
                        <h5 className='farmHousehold__benefit-text-item_header'>1. Trợ giá</h5>
                        <p>Chúng tôi có các chính sách đồng hành trợ giá cùng các nông hộ tại địa phương, góp phần nâng cao chất lượng cuộc sống và kinh tế của họ thông qua con đường phát triển chuỗi giá trị cafe bền vững là để tất cả nông hộ có 1 lợi nhuận cao từ công việc cà phê.</p>
                    </div>  
                    <div className='farmHousehold__benefit-text-item'>
                        <h5 className='farmHousehold__benefit-text-item_header'>2. Thu mua bền vững</h5>
                        <div>
                            <p>Mỗi nông hộ là một mắt xích trong chuỗi cung ứng, những đối tác nông hộ hàng chục năm là minh chứng cho mối quan hệ được gắn kết bằng niềm tin và tâm huyết dành cho cà phê.</p>
                            <p>Chúng tôi luôn nỗ lực mang đến lợi ích kinh tế lâu dài và tương lai ổn định cho bà con nông dân, tôn trọng giá trị và tâm huyết sản xuất.</p>
                        </div>
                    </div>  
                    <div className='farmHousehold__benefit-text-item'>
                        <h5 className='farmHousehold__benefit-text-item_header'>3. Hỗ trợ kỹ thuật</h5>
                        <p>Hỗ trợ, huấn luyện đối tác nông hộ để có vùng nguyên liệu sạch, ổn định theo tiêu chuẩn 4C và UTZ, kiểm soát chất lượng toàn bộ quy trình, chia sẻ kinh nghiệm, truyền tải tâm huyết người trồng đến người dùng bằng những hạt cà phê chất lượng cao.</p>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default FarmHousehold