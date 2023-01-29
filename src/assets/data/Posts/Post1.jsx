import React, { useEffect } from 'react'

import './Post.css'
import images, { manufacturingImages } from '../../images'
import FakeHeader from '../../../components/FakeHeader/FakeHeader'
const Post1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <FakeHeader imageSrc={manufacturingImages.fakeheader} />
            <div className='post section-block'>
                <h3 className='section-heading'>Bài viết</h3>
                <div className='post__wrapper'>
                    <h1 className='post__title'>BARTENDER LÀ GÌ? #8 BƯỚC ĐỂ TRỞ THÀNH MỘT BARTENDER CHUYÊN NGHIỆP</h1>
                    <div className='post__time'>DECEMBER 21, 2020</div>
                    <div className='post__content'>
                        <p>Trong vài năm trở lại đây, Bartender đang là nghề rất thu hút các bạn trẻ, hứa hẹn đem đến nguồn thu nhập kỳ vọng và có cơ hội phát triển tốt. Vậy bạn đã hiểu rõ về nghề Bartender chưa? Hãy cùng tìm hiểu qua bài viết sau đây của Minh Tiến Coffee để cập nhật thêm cho mình những thông tin về nghề Bartender đang rất thịnh hành hiện nay.</p>
                        <div className='post__image'>
                            <img src={images.newsThumnail1} alt='bartender' />
                        </div>
                        <p style={{ textAlign: 'center' }}><em><strong>Bartender là nghề gì </strong>mà thu hút các bạn trẻ đến vậy?</em></p>
                        <h2>Tìm hiểu tổng quan về ngành bartender chuyên nghiệp</h2>
                        <h3>1. Bartender nghĩa là gì</h3>
                        <p>Bartender là người pha chế rượu làm việc tại các quầy Bar, nhà hàng, khách sạn, khu nghỉ dưỡng… Công việc chính của họ là pha chế các loại đồ uống có cồn nhẹ hoặc không cồn theo các yêu cầu từ thực khách, từ những loại nguyên liệu, đồ uống như: rượu, nước hoa quả, nước ngọt có ga…</p>
                        <div className='post__image'>
                            <img src={images.bartenderImage2} alt='bartender2' />
                        </div>
                        <p style={{ textAlign: 'center' }}>
                            <em><strong>Pha chế Bartender là gì? </strong>Là pha chế các loại thức uống có cồn nhẹ hoặc không không cồn từ những loại nguyên liệu như rượu, các loại nước có ga, nước trái cây…</em>
                        </p>
                        <h3>2. Công việc của Bartender gồm những công việc gì?</h3>
                        <p>Công việc chủ yếu của một nhân viên Bartender là pha chế, phục vụ các loại đồ uống theo yêu cầu của khách hàng. Làm Bartender chuyên nghiệp là một người nắm giữ nhiều bí kíp, công thức pha chế, có khả năng sáng tạo ra nhiều loại đồ uống mới thu hút khách hàng. Bên cạnh việc pha chế các loại đồ uống, họ còn có thêm nhiệm vụ nữa là xây dựng thực đơn đồ uống tại nơi mình làm việc, phụ trách việc phân loại, sắp xếp các loại rượu, các dụng cụ pha chế và kiểm tra chất lượng của các sản phẩm (đảm bảo nguyên liệu được bảo quản phù hợp), dọn dẹp, vệ sinh khu vực pha chế đồ uống.</p>
                        <p>Công việc khác nữa của <strong>Bartender là gì? </strong>Ngoài ra, họ còn nhận order, tiếp xúc và giao tiếp trực tiếp với khách hàng. Để mang đến sự hài lòng cho khách hàng, họ không chỉ cần có khả năng giao tiếp, xử lý tình huống mà còn phải có cả kỹ năng biểu diễn điêu luyện trong khi pha chế. Điều này sẽ gây được ấn tượng, thu hút khách hàng quay lại cửa hàng trong những lần tiếp theo. Tất cả những công việc trên đều có thể lý giải lý do tại sao nghề này lại có vai trò rất quan trọng trong các nhà hàng, quán bar, khách sạn,… vì đây được coi như linh hồn của nơi đây.</p>
                        <p>Bên cạnh đó, Bartender còn có một số công việc khác như:</p>
                        <p>Đề xuất các ý tưởng nhằm cải thiện, nâng cao chất lượng dịch vụ, kỹ năng pha chế. <br /> Thường xuyên tham gia vào các khóa học để nâng cao tay nghề
                            Trong những thời điểm đông khách, họ cần sẵn sàng hỗ trợ các nhân viên khác trong bộ phận.</p>
                        <div className='post__image'>
                            <img src={images.bartenderImage3} alt='bartender3' />
                        </div>
                        <p style={{ textAlign: 'center' }}><em><strong>Nghề pha chế rượu </strong>không chỉ là những công việc pha chế tại quầy bar, mà còn phải thực hiện các công việc khác xung quanh trong khi làm công việc chính như giao tiếp với khách hàng, hỗ trợ các bộ phận khác khi đông khách…</em></p>
                        <h3>3. Sự khác nhau giữa Bartender và Barista như thế nào?</h3>
                        <p><strong>Bartender và Barista là gì? </strong>Đây đều là những thuật ngữ chỉ những người thực hiện công việc pha chế nên thường bị hiểu nhầm lẫn là như nhau, song đây lại là hai khái niệm hoàn toàn khác nhau.</p>
                        <p><strong>Bartender</strong> là những nghệ nhân tạo nên những loại thức uống có cồn tuyệt vời, còn Barista lại là những nghệ nhân thổi hồn cho các xu hướng cà phê thịnh hành trên khắp thế giới.</p>
                        <p>Barista là những người pha chế cà phê, có kiến thức rất sâu rộng và am hiểu về cà phê, từ kỹ năng chọn, kỹ năng xay, phân loại, đến rang và pha chế cà phê. Không chỉ vậy, các Barista còn được biết đến với khả năng tạo hình nghệ thuật ấn tượng cho mỗi tách cà phê. Mặt khác, Bartender lại là những người am hiểu về rượu, các thức uống có cồn. Họ gây được ấn tượng với kỹ năng pha chế điêu luyện, đẹp mắt.</p>
                        <p>Môi trường làm việc của các Barista tại những chuỗi cửa hàng cà phê còn môi trường làm việc của Bartender là những quầy bar, nhà hàng, khách sạn…</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post1