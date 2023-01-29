import React from 'react'

import { sustainabilityImages } from '../../../../assets/images'
import './ManufactureSection.css'
const ManufactureSection = () => {
  return (
    <section id='hoat-dong' className='manufactureSection section-block' >
        <h3 className='section-heading'>Sản xuất</h3>
        <div className='manufactureSection__wrapper'>
            <div className='manufactureSection_image'>
                <img src={sustainabilityImages.manufacturing} alt='Manufacturing'/>
            </div>

            <div className='manufactureSection__text'>
                <p>Cam kết bền vững của chúng tôi cũng bao gồm quy trình kiểm soát chặt chẽ về xả thải tại nhà máy, nhằm bảo vệ môi trường, nguồn nước, xây dựng hệ thống tái sử dụng vỏ cà phê, xử lý khí đốt tạo nên luân chuyển tài nguyên, tránh tiêu tốn và lãng phí.</p>
                <p>Bên cạnh đó, chúng tôi cũng tạo ra môi trường làm việc an toàn với văn hóa gắn kết và tự thức trong hệ giá trị lõi của doanh nghiệp.</p>
                <a className='readmore-link' href='san-xuat'>Đến trang sản xuất</a>
            </div>
        </div>
    </section>
  )
}

export default ManufactureSection