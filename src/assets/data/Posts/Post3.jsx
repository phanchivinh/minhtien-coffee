import React, { useEffect } from 'react'

import './Post.css'
import images, { manufacturingImages } from '../../images'
import FakeHeader from '../../../components/FakeHeader/FakeHeader'
const Post3 = () => {

        useEffect(() => {
                window.scrollTo(0,0);
        }, [])
  return (
    <div>
        <FakeHeader imageSrc={manufacturingImages.fakeheader} />
        <div className='post section-block'>
            <h3 className='section-heading'>Bài viết</h3>
            <div className='post__wrapper'>
                <h1 className='post__title'>[BARISTA LÀ GÌ] TẤT TẦN TẬT NHỮNG CÔNG VIỆC CỦA MỘT BARISTA</h1>
                <div className='post__time'>DECEMBER 20, 2020</div>
                <div className='post__content'>
                    <p>Nghề Barista đã xuất hiện từ rất lâu nhưng gần đây tên gọi này mới trở nên phổ biến hơn cũng như nền văn hóa đồ uống được đến gần hơn với mọi người. Vậy bạn đã biết rõ về Barista là gì chưa? Hãy cùng tìm hiểu cụ thể khái niệm này vã những thông tin cơ bản về lĩnh vực công việc này nhé. Biết đâu bạn lại yêu thích và muốn gắn bó với công việc này thì sao?</p>
                    <div className='post__image'>
                            <img src={images.newsThumnail1} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em><strong>Nhân viên Barista là gì</strong> bạn đã biết chưa?</em></p>
                    <h2>Barista là gì?</h2>
                    <p>Barista là tên gọi bắt nguồn từ tiếng Ý dùng để chỉ những người làm việc trong lĩnh vực pha chế cà phê và những loại thức uống không cồn. Vậy Barista là nghề gì? Là những nhân viên pha chế cà phê, đảm nhận các công việc pha chế đồ uống như Capuchino, Espresso, Latte, Mocha… Đôi khi Barista còn kiêm cả phục vụ, bán hàng, chuẩn bị các nguyên liệu pha chế đầu ca và cuối ca tại các cửa hàng nhỏ.</p>
                    <p>Barista giữ một vị trí quan trọng trong hoạt động kinh doanh đối với một cửa hàng cà phê bởi họ chính là những nghệ nhân tài hoa thổi hồn vào từng tách cà phê. Không chỉ đảm nhiệm một công việc chính là pha chế và tạo hình đồ uống để mang đến cho khách hàng những sản phẩm ngon miệng và bắt mắt nhất, trong cửa hàng cà phê, Barista còn phụ trách các phần công việc khác như:</p>
                    <p>
                      Kiểm tra chất lượng của nguyên vật liệu và chuẩn bị máy móc, dụng cụ, thiết bị pha chế.
                      <br/>
                      Tư vấn về đồ uống cho khách hàng.
                      <br />
                      Sáng tạo ra những sản phẩm đồ uống mới, cập nhật, đa dạng hóa menu cho cửa hàng.
                      <br />
                      Đảm bảo vệ sinh khu vực pha chế, các thiết bị và dụng cụ trong suốt quá trình sử dụng và sau khi sử dụng xong.
                      <br />
                      Phối hợp với bộ phận quản lý để kiểm tra, bảo trì các loại thiết bị, máy móc.
                      <br />
                      Kiểm tra và tạo hóa đơn nhập hàng
                    </p>
                    <div className='post__image'>
                            <img src={images.post3Image2} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em><strong>Nhân viên Barista là gì</strong> bạn đã biết chưa?</em></p>
                    <h2>Phân biệt Barista và Bartender khác nhau như thế nào ?</h2>
                    <p>Vì không có nhiều hiểu biết về chuyên môn nên có nhiều người đánh đồng 2 khái niệm Barista và Bartender với nhau. Nhưng trên thực tế thì đây là lại 2 công việc hoàn toàn khác nhau. Vậy Barista và Bartender khác nhau cụ thể như thế nào?</p>
                    <p>Nếu như <strong>Barista cơ bản</strong> là những nghệ nhân pha chế cà phê và thức uống không cồn nói chung và làm việc tại các cửa hàng cà phê thì Bartender lại là những người nghệ nhân chuyên pha chế các loại đồ uống có cồn như cocktail, mocktail,.. và làm việc tại các quầy bar của các khách hàng, nhà hàng, quán Bar, Club, Pub…</p>
                    <p>Nếu như Barista có kiến thức sâu rộng về cà phê thì Bartender lại là những người rất am hiểu về các loại rượu. Nếu như Barista là những nghệ nhân chuyên trang trí, tạo hình cà phê tài hoa thì Bartender lại là những người có kỹ năng biểu diễn trong quá trình pha chế rượu, cocktail tuyệt vời.</p>
                    <p>Như vậy có thể thấy Barista và Bartender rất khác nhau, từ công việc, môi trường làm việc, kiến thức về chuyên môn cũng như các kỹ năng trong nghề cần thiết. Vì vậy, hy vọng bạn đọc đã phân biệt được rõ hơn hai khái niệm công việc này rồi nhé!</p>
                    <div className='post__image'>
                            <img src={images.post3Image3} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Pha chế Barista là gì? Đây là những người rất giỏi trong cách trang trí, tạo hình trên cà phê, còn Bartender lại rất giỏi trong quá trình biểu diễn các kỹ thuật pha chế rượu…</em></p>
                    <h2>TẠI SAO BARISTA LẠI TRỞ THÀNH XU HƯỚNG NGHỀ NGHIỆP Ở GIỚI TRẺ HIỆN NAY?</h2>
                    <p>Không phải tự nhiên mà Barista lại trở thành một nghề thu hút và hấp dẫn giới trẻ đến vậy. Cùng Minh Tiến Coffee tìm hiểu pha chế Barista là gì mà lại được các bạn trẻ yêu thích và theo đuổi đến vậy nhé!</p>
                    <h3>1.  Tính chất công việc và môi trường làm việc</h3>
                    <p>Barista là một ngành nghề có hơi hướng của nghệ thuật. Trở thành một Barista chính hiệu là bạn có thể sống với đam mê nghệ thuật của mình, thỏa sức sáng tạo để tạo nên những sản phẩm mang phong cách thẩm mỹ và thương hiệu cá nhân vào từng tách cà phê. Chính khả năng sáng tạo bất tận cũng là một điểm thu hút lớn của nghề Barista đối với các bạn trẻ.</p>
                    <p>Nơi làm việc của một Barista tại những cửa hàng hoặc chuỗi cửa hàng cà phê. Đây là nơi có môi trường làm việc tự do, năng động, thoải mái, hiện đại chứ không gò bó như những công việc trong nhà nước hay khối văn phòng. Tính chất công việc như vậy thật sự rất phù hợp với lối sống của các bạn trẻ ngày nay, đặc biệt là những bạn có đam mê, yêu thích nghệ thuật.</p>
                    <div className='post__image'>
                            <img src={images.post3Image4} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Môi trường làm việc trẻ trung, năng động, không bị gò bó khiến các bạn trẻ thoải mái sáng tạo trong chính công việc của mình</em></p>
                    <h3>2.  Cơ hội việc làm và mức lương</h3>
                    <p>Nhu cầu về nhân sự cho ngành pha chế ở Việt Nam đang ngày một lớn. Đây chính là những điều kiện thuận lợi vô cùng cho những người yêu thích và có niềm đam mê muốn trở thành Barista chuyên nghiệp.</p>
                    <p>Sự xuất hiện của các thương hiệu cà phê nổi tiếng như Highlands, Starbucks, The Coffee House… là một trong những yếu tố tạo nên các cơ hội việc làm vô cùng hấp dẫn.</p>
                    <p>Với nhu cầu tuyển dụng như vậy nên với một Barista chuyên nghiệp sẽ có rất nhiều cơ hội nhận được những vị trí công việc phù hợp với chế độ đãi ngộ tốt, cơ hội thăng tiến và phát triển trong tương lai.</p>
                    <p>Bên cạnh việc ứng tuyển tại các vị trí việc làm ở các chuỗi thương hiệu nổi tiếng, các nhà hàng hay khách sạn… thì khi đã có kinh nghiệm chuyên môn tốt, bạn hoàn toàn có thể xây dựng và phát triển được một thương hiệu cửa hàng cà phê cho riêng mình. Đây không chỉ là cơ hội để hiện thực hóa đam mê của bản thân mà còn tạo ra những cơ hội việc làm mới cho các Barista trẻ khác có cơ hội được học hỏi, được đào tạo để nối tiếp, phát triển nghề Barista.</p>
                    <p>Ngoài ra thì mức lương cũng là một trong những yếu tố quan trọng khiến mọi người quan tâm nhiều nhất khi bắt đầu bất kỳ một công việc nào phải không? Lý do nghề Barista được nhiều bạn trẻ theo đuổi như vậy cũng một phần bởi công việc này có mức lương khá lý tưởng.</p>
                    <p>Đối với một Barista mới ra nghề thì mức lương khởi điểm sẽ dao động từ 4 đến 7 triệu đồng/ tháng tùy thuộc vào khả năng của bạn. Sau một khoảng thời gian đào tạo, rèn luyện và nâng cao tay nghề chuyên môn cũng như trau dồi thêm kinh nghiệm, sẽ có nhiều cơ hội thăng tiến lên những vị trí công việc cao hơn với mức lương cao hơn nữa.</p>
                    <p>Với vị trí công việc như Barista chuyên nghiệp, chuyên viên đào tạo pha chế hoặc quản lý thì mức thu nhập khoảng 10 – 20 triệu đồng/tháng là hoàn toàn dễ dàng.</p>
                    <div className='post__image'>
                            <img src={images.post3Image5} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Barista có cơ hội việc làm rộng mở với mức thu nhập khá lý tưởng</em></p>
                    <h3>3. Con gái có thể làm nhân viên Barista không?</h3>
                    <p>Nghề pha chế nói chung và Barista nói riêng thường không yêu cầu về độ tuổi hay giới tính. Cho dù bạn là con gái hay con trai thì đều có thể làm việc ở lĩnh vực này chỉ cần có đam mê và yêu thích công việc pha chế.</p>
                    <p>Thực tế cho thấy có rất nhiều quán cà phê đã và đang tuyển dụng số lượng nhân viên nam nữ đồng đều nhau. Thậm chí, có rất nhiều bạn gái đã thành công khi theo đuổi sự nghiệp pha chế cũng như khẳng định được tay nghề của mình.</p>
                    <div className='post__image'>
                            <img src={images.post3Image6} alt='barista la gi' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Barista là công việc không yêu cầu về độ tuổi hay giới tính. Vì vậy đừng ngần ngại khi mình là phái nữ, hãy tự tin thể hiện bản thân mình với công việc mà mình yêu thích.</em></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post3