import React from 'react'

import './Economy.css'
const Economy = () => {
  return (
    <section id='kinh-te' className='economy section-block'>
        <h3 className='section-heading'>Kinh Tế</h3>
        <div className='economy__wrapper'>
            <div className='economy__content'>
                <h4>Nông hộ</h4>
                <p className='block1'>Mỗi nông hộ là một mối liên kết đặc biệt trong hơn 5.000 nông hộ hợp tác với chúng tôi được nuôi dưỡng và bồi đắp dựa trên sự cam kết trong hành trình xây dựng cafe bền vững. Chúng tôi đảm bảo các chính sách thu mua cà phê đặc biệt từ những người trồng trọt.</p>
                <p className='block2'>Bên cạnh đó chúng tôi đã hỗ trợ các nông hộ, xây dựng nhóm quản lý, kỹ sư theo vùng để tạo điều kiện giám sát, hỗ trợ đào tạo, phân phối cây giống và đầu vào cho nông nghiệp hữu cơ. Ngoài ra nâng cao chất lượng đời sống thông qua con đường phát triển chuỗi giá trị cafe bền vững là để</p>
            </div>

            <div className='economy__content'>
                <h4>Doanh nghiệp</h4>
                <p className='block1'>Phát triển các vùng nguyên liệu bền vững cùng với nông hộ cho chúng tôi đầu vào của cafe ổn định. Tiêu chuẩn chất lượng cafe và tính nguyên bản từ các vùng trồng mang phẩm chất, hương vị đặc trưng. Chúng tôi không ngừng truyền cảm hứng thúc đẩy tinh thần chung với sự gắn kết bởi tình yêu cafe.</p>
                <p className='block2'>Mỗi một sản phẩm được làm ra từ cái tâm của người làm nghề, chân thật và minh bạch, từ vùng nguyên liệu. Quá trình sản xuất, khâu chế biến và kiểm soát chất lượng đến hương vị cà phê 100% nguyên bản được đảm bảo thông qua đội ngũ nghệ nhân rang xay.</p>
            </div>
        </div>
    </section>
  )
}

export default Economy