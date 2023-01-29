import React,{ useEffect } from 'react'

import './Post.css'
import images, { manufacturingImages } from '../../images'
import FakeHeader from '../../../components/FakeHeader/FakeHeader'
const Post2 = () => {

        useEffect(() => {
                window.scrollTo(0,0);
        }, [])
  return (
    <div>
        <FakeHeader imageSrc={manufacturingImages.fakeheader} />
        <div className='post section-block'>
            <h3 className='section-heading'>Bài viết</h3>
            <div className='post__wrapper'>
                <h1 className='post__title'>Uống nhiều cà phê hòa tan có tốt không? #3 tác hại bạn nên biết</h1>
                <div className='post__time'>DECEMBER 21, 2020</div>
                <div className='post__content'>
                    <p>Hiện nay, cà phê hòa tan đang được xem là thức uống yêu thích của nhiều người bởi sự tiện lợi, tiết kiệm thời gian, giá thành và cách pha chế vô cùng đơn giản của nó. Chúng ta thường biết đến những lợi ích tuyệt vời của cà phê hòa tan như: gia tăng chức năng não, giảm nguy cơ mắc các bệnh thoái hóa, giảm nguy cơ mắc bệnh gan, ung thư gan, … Thế nhưng, uống cà phê hòa tan có thật sự hoàn toàn tốt? <strong>Tác hại của cà phê hòa tan</strong> là gì? Hãy cùng theo dõi ngay bài viết dưới đây để trả lời câu hỏi.</p>
                    <div className='post__image'>
                            <img src={images.post2Image2} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Một ly cà phê hòa tan vào buổi sáng cho tinh thần thoải mái</em></p>
                    <h2>Cà phê hòa tan là gì?</h2>
                    <p>Trước khi đi vào tìm hiểu <strong>tác hại của cà phê hòa tan</strong>, chúng ta cần biết được cà phê hòa tan là loại cà phê như thế nào? Cà phê hòa tan hay còn được gọi với cái tên khác là cà phê uống liền (instant coffee), đây là một loại đồ uống được chiết xuất từ các hạt cà phê khi rang khô. Sau đó, người ta sẽ rang xay chúng dưới dạng bột, thêm đường hoặc sữa theo công thức có sẵn sao cho phù hợp. Chỉ cần bóc vỏ, cho vào ly, thêm nước sôi, khuấy đều vậy là bạn đã sở hữu cho mình một tách cà phê thơm ngon rồi. Thế nên thật dễ hiểu khi nhiều người lựa chọn chúng đúng không nào?</p>
                    <div className='post__image'>
                            <img src={images.post2Image3} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Một tách cà phê ngon để dễ dàng thực hiện công việc</em></p>
                    <p>Để tạo ra được những gói cà phê hòa tan, người ta đã thực hiện quy trình sản xuất vô cùng nghiêm ngặt. Đầu tiên là bước chọn nguyên liệu, lựa chọn những hạt cà phê nhân ngon, đạt tiêu chuẩn. Sau đó rang xay, trích ly, cô đặc, sấy khô, hồi hương và đóng gói thành phẩm. Từ đó chúng ta có những mặt hàng vô cùng tiện lợi để sử dụng.</p>
                    <h2>Những tác hại mà cà phê gây ra</h2>
                    <p>Bên cạnh những mặt tích cực mà cà phê hòa tan có thể mang lại thì trên thực tế chúng gây ra không ít ảnh hưởng xấu đối với sức khỏe của bạn. Chúng ta cùng điểm qua những tác hại của cà phê hòa tan ngay đây:</p>
                    <h3>2.1. Gây chứng mất ngủ, bồn chồn</h3>
                    <p>Chúng chỉ thật sự phát huy tác dụng giúp cơ thể tỉnh táo và tràn đầy năng lượng khi bạn sử dụng một lượng vừa đủ. Đừng quá tham lam và làm dụng nó vì sẽ bị phản tác dụng ngay. Cà phê có chứa cafein thế nên trong một ngày uống quá nhiều sẽ khiến cho bạn gặp phải chứng mất ngủ, làm bạn căng thẳng và rất hay bồn chồn. Nguy hiểm hơn là có thể, rời vào tình trạng mắc bệnh tim. Vì thế, các chuyên gia luôn đưa ra khuyến cáo, các bạn không nên lạm dụng uống cà phê hòa tan quá nhiều, uống trước khi đi ngủ.</p>
                    <div className='post__image'>
                            <img src={images.newsThumnail2} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Bạn sẽ bị mất ngủ nếu uống quá nhiều cà phê hòa tan</em></p>
                    <h3>2.2. Gây đau dạ dày</h3>
                    <p>Theo một số nghiên cứu chỉ ra rằng, trong cà phê có chứa caffeine. Chúng ta thường nghĩ rằng nó là chất kích thích giúp tinh thần tỉnh táo hơn. Tuy nhiên, chúng tại là nguyên nhân làm tăng tần suất các cơn co thắt ở hệ tiêu hóa. Ngoài caffeine, các nghiên cứu còn chỉ ra axit cà phê cũng có thể là nguyên nhân gây đau dạ dày. Cà phê chứa nhiều axit như axit chlorogen và N-alkanoyl-5-hydroxytryptamide, đã được chứng minh là làm tăng sản xuất axit dạ dày. Loại axit này có tác dụng phân hủy thức ăn để nó di chuyển xuống ruột, tiếp tục được tiêu hóa. </p>
                    <div className='post__image'>
                            <img src={images.post2Image4} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Uống cà phê không đúng cách có thể gây đau dạ dày</em></p>
                    <p>Ngoài ra, người ta chỉ ra rằng có thể nguyên nhân đau dạ dày không đến từ cà phê mà chính là các thành phần phụ gia có trong cà phê hòa tan như sữa, kem, đường … là thứ khiến cho dạ dày trở nên khó chịu. Tốt nhất bạn hãy ăn sáng trước khi uống cà phê để đảm bảo các chất này không tiết axit sớm khi dạ dày chưa có gì.</p>
                    <h3>2.3. Gây dị tật cho thai nhi</h3>
                    <p>Nếu bạn là một fan cuồng của loại thức uống này thì chúng tôi thực lòng khuyên bạn nên giảm thiểu tối đa hoặc nếu được hãy loại bỏ nó ra khỏi danh sách đồ uống của mình. Tại sao lại như vậy? Như những phân tích ở trên có thể thấy cà phê hòa tan có chứa caffeine, chúng sẽ làm nhịp tim của bạn tăng lên rất nhanh, điều này vô cùng nguy hiểm. Hơn nữa, khi mang thai sức đề kháng của phụ nữ rất yếu, dẫn đến quá trình tiêu thụ caffeine gấp 2 lần so với người thường.</p>
                    <div className='post__image'>
                            <img src={images.post2Image5} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Không nên uống cà phê khi mang thai</em></p>
                    <p>Thông thường khi mang thai bạn cần bổ sung sắt, tuy nhiên thành phần phenol trong cà phê hòa tan là hoạt chất ngăn cản cơ thể bạn hấp thụ chất sắt đấy nhé. Vậy nên đừng để việc làm này của bạn trở nên vô nghĩa. Và mọi thứ sẽ trở nên nguy hiểm và đáng sợ hơn nếu bạn uống hơn 8 ly cà phê mỗi ngày trong thời kỳ mang thai, bởi nó là nguyên nhân chính gây chết phôi thai.</p>
                    <div className='post__image'>
                            <img src={images.post2Image6} alt='tac hai cua ca phe' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Cà phê hòa tan không gây hại nếu bạn sử dụng đúng cách</em></p>
                    <p>Trên đây là toàn bộ thông tin về cà phê hòa tan, chính bạn cũng tự rút ra được cho mình <strong>tác hại của cà phê hòa tan</strong> đối với cơ thể đúng không nào. Tuy nhiên, bạn cũng thấy đấy, nó có thật sự gây hại cho bạn hay không còn tùy thuộc vào chính thể trạng, cách sử dụng của bạn. Hãy là người dùng thông thái để có thể thưởng thức ly cà phê ngon và tốt cho sức khỏe nhé!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post2