import React from 'react'

import { sustainabilityImages } from '../../../../assets/images'
import './Environment.css'
const Environment = () => {
  return (
    <section id='moi-truong' className='environment section-block'>
        <h3 className='section-heading'>Môi trường</h3>
        <div className='environment__wrapper'>
            <div className='environment__text'>
                <h4>Vùng nguyên liệu</h4>
                <p className='block1'>Chúng tôi tạo ra sự cân bằng giữa nông nghiệp hữu cơ và hệ sinh thái môi trường bản địa, duy trì nông nghiệp sạch với đất đai màu mỡ đến từ hệ sinh thái tự nhiên (thổ nhưỡng, nguồn nước, ánh sáng...)</p>
                <p className='block2'>Các chương trình tập huấn, kiểm tra giúp xây dựng ý thức hơn trong việc bảo vệ nguồn nước, quản lý rác thải, tăng cường cây che bóng và một số loại cây phủ đất để giữ ẩm và cải tạo đất.</p>
            </div>
        </div>

        <div className='environment__image' style={{backgroundImage: `url(${sustainabilityImages.materialArea})`}}>
            <p>
                “Chúng tôi tạo ra sự cân bằng giữa nông nghiệp hữu cơ và hệ sinh thái môi
                <br />
                trường bản địa, duy trì nông nghiệp sạch với đất đai màu mỡ đến từ hệ sinh
                <br />
                thái tự nhiên”
            </p>
        </div>
    </section>
  )
}

export default Environment