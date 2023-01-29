import React from 'react'

import './ManufactureProcess.css'
const ManufactureProcess = () => {
  return (
    <section id='quy-trinh-san-xuat' className='manufactureProcess section-block'>
        <h3 className='section-heading'>Quy trình sản xuất</h3>
        <div className='manufactureProcess__wrapper'>
            <h4>Từ hạt giống đến cà phê</h4>
            <div className='manufactureProcess__content'>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-1' checked/>
                    <label for='manufactureProcess-content-item-1' className='manufactureProcess__content-heading'>
                        1. Gieo trồng
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Mỗi mùa mưa tới, Minh Tiến lại thử nghiệm gieo trồng những giống cà phê mới.</p>
                        <p>Từng cây con được vun trên nền đất thổ nhưỡng tốt, tắm mình trong ánh nắng và nước mỗi ngày.</p>
                        <p>Qua thời gian, được chăm bón bởi bàn tay người nông dân lành nghề, áp dụng phương thức canh tác của chuyên gia, cây cà phê vươn mình lấy tinh hoa đất trời, mạnh mẽ trưởng thành.</p>
                    </div>
                </div>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-2' />
                    <label for='manufactureProcess-content-item-2' className='manufactureProcess__content-heading'>
                        2. Thu hoạch
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Từ những sơn nguyên bạt ngàn một màu trắng tinh khôi của hoa cà phê đầu năm, những quả non xanh nhú dần, chờ tắm đủ nắng sẽ chuyển sang đỏ mọng vào những tháng cuối năm.</p>
                        <p>Mỗi vùng trồng có thời gian rộ quả chín khác nhau, nhưng nương vào sắc đỏ của quả cà phê, người nông dân Minh Tiến biết rõ thời điểm thu hoạch thích hợp.</p>
                        <p>Từng quả chín mọng được hái cẩn thận bằng tay, chắt chiu công sức người gieo trồng, mang bản sắc vùng trồng đến từng nhà máy.</p>
                    </div>
                </div>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-3' />
                    <label for='manufactureProcess-content-item-3' className='manufactureProcess__content-heading'>
                        3. Xát vỏ
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Lớp vỏ ngoài cùng lớp thịt nhớt được chà xát, đánh nhớt kĩ càng. Từ đó, hạt cà phê tiếp tục được chà bỏ vỏ thóc, vỏ lụa, để lộ hạt cà phê xanh bóng, mượt mà.</p>
                    </div>
                </div>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-4' />
                    <label for='manufactureProcess-content-item-4' className='manufactureProcess__content-heading'>
                        4. Phơi xấy
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Hạt cà phê căng mọng được tắm mình dưới ánh nắng, bay dần lượng nước trong mình. Minh Tiến áp dụng cả phương pháp phơi giàn và sấy trong quy trình sản xuất để đảm bảo lượng nước trong hạt đạt tiêu chuẩn xuất khẩu, giữ trọn hương vị thơm ngon đến tay người tiêu dùng.</p>
                    </div>
                </div>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-5' />
                    <label for='manufactureProcess-content-item-5' className='manufactureProcess__content-heading'>
                        5. Phân loại hạt
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Từng hạt cà phê được đưa vào máy sàng, phân loại theo từng kích thước hạt để chất lượng sản xuất được đồng đều.</p>
                        <p>Những quả lỗi còn sót lại được tỉ mỉ loại bỏ bằng tay, bởi những công nhân cẩn thận, chăm chút cho từng hạt cà phê như chính cuộc sống của mình.</p>
                    </div>
                </div>
                {/* content Item */}
                <div className='manufactureProcess__content-item'>
                    <input type='checkbox' id='manufactureProcess-content-item-6' />
                    <label for='manufactureProcess-content-item-6' className='manufactureProcess__content-heading'>
                        6. Rang
                    </label>
                    <div className='manufactureProcess__content-text'>
                        <p>Từ hạt cà phê xanh, dưới sức nóng của nhiệt độ và bàn tay thợ lành nghề, hạt cà phê chuyển dần sang màu nâu đặc trưng thường thấy. Tùy thuộc vào mục đích sử dụng, cà phê được rang ở từng cấp độ khác nhau, bung tỏa hương vị bản sắc của chính mình cách trọn vẹn nhất.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ManufactureProcess