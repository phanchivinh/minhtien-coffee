import React from 'react'

import images from '../../../../assets/images'
import './Export.css'
const Export = () => {
  return (
    <section id='xuat-khau' className='export section-block'>
        <h3 className='section-heading'>Xuất khẩu</h3>
        <div className='export__wrapper'>
            <h4>Danh mục <br/> cà phê</h4>
            <div className='export__description'>
                <p>Phát triển cà phê dựa vào bản sắc văn hoá bản địa, cũng như thổ nhưỡng, khí hậu và thiên nhiên vùng trồng, vì vậy giá trị và đặc tính khác nhau của từng loại cà phê cũng vì thế mà được bảo toàn.</p>
                <p>Các nghệ nhân của chúng tôi dành phần lớn thời gian và nỗ lực để nghiên cứu, lưu giữ bản sắc của hạt cà phê, đưa ra tất cả tiềm năng sáng nhất hương vị vốn có trong mỗi loại cà phê, để vị thanh ngọt tự nhiên và các sắc thái hương vị tinh tế nhất.</p>
                <a className='readmore-link' href='#lien-he'>Liên hệ với chúng tôi</a>
            </div>
            <div className='export__list'>
                <h6>Single Origin</h6>
                <table>
                    <tbody>
                        <tr>
                            <td>Kona Coffee Beans</td>
                            <td>Arabica</td>
                            <td>Hawaii, USA</td>
                        </tr>
                        <tr>
                            <td>Blue Mountain</td>
                            <td>Arabica</td>
                            <td>Jamaica</td>
                        </tr>
                        <tr>
                            <td>Kenyan AA</td>
                            <td>Arabica</td>
                            <td>Kenya</td>
                        </tr>
                        <tr>
                            <td>Peaberry Beans</td>
                            <td>Arabica</td>
                            <td>Tanzania</td>
                        </tr>
                        <tr>
                            <td>Dark Roast Sumatra</td>
                            <td>Arabica</td>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <td>Sulawesi Toraja</td>
                            <td>Arabica</td>
                            <td>Indonesia</td>
                        </tr>
                        <tr>
                            <td>Kona Coffee Beans</td>
                            <td>Arabica</td>
                            <td>Hawaii, USA</td>
                        </tr>
                    </tbody>
                </table>
                <h6>Mixed</h6>
                <table>
                    <tbody>
                        <tr>
                            <td>Kona Coffee Beans</td>
                            <td>Arabica</td>
                            <td>Hawaii, USA</td>
                        </tr>
                        <tr>
                            <td>Blue Mountain</td>
                            <td>Arabica</td>
                            <td>Jamaica</td>
                        </tr>
                        <tr>
                            <td>Kenyan AA</td>
                            <td>Arabica</td>
                            <td>Kenya</td>
                        </tr>
                        <tr>
                            <td>Peaberry Beans</td>
                            <td>Arabica</td>
                            <td>Tanzania</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className='export__image'>
            <img  src={images.highlineImages2} alt='high-line'/>
        </div>
    </section>
  )
}

export default Export