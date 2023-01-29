import React from 'react'

import images from '../../../../assets/images';
import videos from '../../../../assets/videos';
import './Story.css'
const Story = () => {
  return (
    <section className='story section-block' id='cau-chuyen'>
        <h3 className='section-heading '>Câu chuyện Minh Tiến</h3>
        <div className='story__wrapper'>
            <div className='story__title' >
                CÀ PHÊ NGUYÊN BẢN
                <br/>
                TRÊN CAO NGUYÊN
                <br/>
                MÙ SƯƠNG
            </div>
            <div className='story__background' >
                <img src={images.storyBackground} alt='story-background1' />
                {/* <img src={images.storyBackground} alt='story-background' /> */}
            </div>

            <div className='story__content'>
                <div className='story__content-quote'>“Chúng tôi tin vào chuỗi giá trị hạnh phúc bắt đầu hành trình từ nông trại cho đến tách cà phê.”</div>
                <div className='story__content-info'>
                    <article>
                        <h6 className='readmore-link'>Về chúng tôi</h6>
                        <p>Khởi đầu hành trình năm 2000, Minh Tiến ra đời với khát vọng mang lại giá trị nguyên bản và hạnh phúc nơi hạt cà phê sinh ra.</p>
                    </article>
                    <article>
                        <h6 className='readmore-link'>Tạo nền tảng</h6>
                        <p>Dựa trên mô hình canh tác bền vững từ các vùng nguyên liệu độc lập, hạt cà phê chất lượng cao, đạt tiêu chuẩn quốc tế của Minh Tiến đã chinh phục được các đối tác xuất khẩu và người yêu cà phê trên toàn thế giới.</p>
                    </article>
                    <article>
                        <h6 className='readmore-link'>Cầu nối gắn kết</h6>
                        <p>Với chất liên kết là tình yêu cà phê, Minh Tiến luôn cố gắng là cầu nối gắn kết và lan toả hạnh phúc từ nông hộ, đối tác – khách hàng đến người tiêu dùng và cộng đồng. Để thực hiện được điều này, Minh Tiến luôn đảm bảo chất lượng và giá trị nguyên bản của hạt cà phê.</p>
                    </article>
                </div>
            </div>
            <div className='story__video'>
                <div className='story__video-container'>
                    <video muted autoPlay loop playsInline poster={images.videothump1}>
                        <source src={videos.videoGioiThieu} type='video/mp4' />
                    </video>
                </div>
                <div className='story__video-text'>
                    <h2>
                        Hành trình mang lại
                        <br/>
                        hạnh phúc
                    </h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story