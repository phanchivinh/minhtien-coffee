import React,{ useEffect } from 'react'

import './Post.css'
import images, { manufacturingImages } from '../../images'
import FakeHeader from '../../../components/FakeHeader/FakeHeader'
const Post4 = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div>
        <FakeHeader imageSrc={manufacturingImages.fakeheader} />
        <div className='post section-block'>
            <h3 className='section-heading'>Bài viết</h3>
            <div className='post__wrapper'>
                <h1 className='post__title'>12+ CÁCH LÀM SINH TỐ XOÀI TẠI NHÀ THƠM NGON BỔ DƯỠNG</h1>
                <div className='post__time'>DECEMBER 19, 2020</div>
                <div className='post__content'>
                    <p>Xoài là một loại trái cây nhiệt đới đặc trưng ở nước ta. Khi mùa hè đến cũng là mùa để thu hoạch xoài. Mùa nào sử dụng thức đấy để chế biến, nấu đồ ăn, thức uống sẽ giúp có được những hương vị tươi ngon. Hãy cùng tìm hiểu về xoài chín để chế biến được nhiều món ngon như sinh tố xoài là một thức uống không nên bỏ qua trong mỗi dịp hè. Bạn đã biết cách làm sinh tố xoài chưa? Cùng tham khảo những chia sẻ về công thức, hướng dẫn chi tiết dưới đây của Minh Tiến Coffee để có thể tự làm cho mình những cốc sinh tố xoài thơm ngon, giải nhiệt ngày hè nhé!</p>
                    <div className='post__image'>
                            <img src={images.post4Image2} alt='cach lam sinh to xoai' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em>Bạn đã biết đến <strong>cách làm sinh tố xoài giảm cân</strong> chưa?</em></p>
                    <h2>HƯỚNG DẪN CÁCH LÀM SINH TỐ XOÀI VỚI SỮA TƯƠI</h2>
                    <p><strong>Nguyên liệu làm sinh tố xoài</strong> sữa tươi cần có:</p>
                    <p>
                      2 quả xoài chín
                      <br/>
                      100ml sữa tươi có đường
                      <br/>
                      30g sữa chua
                      <br/>
                      Đá bào
                      <br/>
                      Máy xay sinh tố
                      <br/>
                      Hướng dẫn cách làm sinh tố xoài sữa tươi như sau:
                    </p>
                    <p>
                      Bước 1: Chuẩn bị xoài và các nguyên liệu cần thiết
                      <br/>
                      Xoài chín sau khi mua về cần phải rửa sạch sau đó dùng dao gọt nhẹ lớp vỏ để lấy được nhiều phần thịt nhất. Sau khi gọt hết vỏ, bỏ hạt, thu được phần thịt xoài và cắt nhỏ thành các miếng để dễ xay.
                    </p>
                    <p>Hòa tan phần sữa chua và phần sữa tươi thật đều. Nếu không muốn mất nhiều thời gian thì có thể đổ trực tiếp hai nguyên liệu này cùng vào máy xay sinh tố.</p>
                    <p>
                      Bước 2: Thực hiện xay sinh tố xoài
                      <br/>
                      Cho xoài vào máy cùng với sữa chua và sữa tươi. Bật máy và xay cho nhuyễn hỗn hợp trên. Lưu ý là hỗn hợp xay càng nhuyễn thì món sinh tố xoài thành phẩm sẽ càng ngon.
                    </p>
                    <p>Sinh tố xoài sau khi xay xong thì rót ra ly hoặc cốc, cho thêm đá bào vào và trộn đều lên. Như vậy bạn đã hoàn thành một ly sinh tố xoài sữa tươi tự nhiên, thơm ngon và mát lạnh rồi.</p>
                    <div className='post__image'>
                            <img src={images.post4Image3} alt='cach lam sinh to xoai' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em><strong>Công thức làm sinh tố xoài</strong> với sữa tươi</em></p>
                    <h2>CÔNG THỨC LÀM SINH TỐ XOÀI VỚI SỮA ĐẶC</h2>
                    <p>Nguyên liệu cần chuẩn bị để làm sinh tố xoài ngon với sữa đặc:</p>
                    <p>
                      4 trái xoài chính
                      <br/>
                      4 muỗng sữa đặc có đường
                      <br/>
                      4 chén đá bi
                      <br/>
                      Cách làm sinh tố xoài ngon với sữa đặc:
                    </p>
                    <p>Lựa những trái xoài chín, to, căng mọng, có vỏ mỏng, màu vàng tươi, phần cuống xoài có thịt đầy, trái xoài có mùi thơm và không chọn những trái bị dập nát. Sau đó đem rửa sạch và gọt vỏ.
                      <br />Dùng dao gọt để lấy phần thịt xoài, bỏ hạt và cắt thành miếng nhỏ để thuận tiện xay. Sau đó bỏ chúng vào máy xay sinh tố để xay nhuyễn. Tiếp đó cho thêm 4 muỗng sữa đặc vào và thêm đá bào vào xay cho mịn. Nêm nếm lại lần cuối, có thể cho thêm sữa đặc hoặc đá bào tùy theo ý muốn. Cuối cùng đổ sinh tố xoài với sữa đặc ra ly và thưởng thức.</p>
                      <div className='post__image'>
                            <img src={images.post4Image4} alt='cach lam sinh to xoai' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em><strong>Làm sinh tố xoài</strong> với sữa đặc</em></p>
                    <h2>LÀM SINH TỐ XOÀI NGON VỚI SỮA CHUA VÀ MẬT ONG</h2>
                    <p>Nguyên liệu làm sinh tố xoài sữa chua cần chuẩn bị:</p>
                    <p>
                      5-6 quả xoài chín, vỏ vàng đều, không có đốm đen, da căng mọng và vẫn cứng tay.
                      <br/>
                      60ml sữa chua (khoảng 2 hũ) có thể chọn loại lên men nguyên chất hoặc sữa chua kết hợp với các loại hoa quả khác.
                      <br/>
                      Nửa thìa đến 1 thìa mật ong. Chọn loại mật ong nguyên chất không pha tạp để có thể pha chế được món sinh tố ngon hơn.
                      <br/>
                      ½ bát con nước lạnh: giúp sinh tố dễ xay hơn, đồng thời giúp món sinh tố không bị quá ngọt.
                      <br/>
                      Cách làm sinh tố xoài đơn giản với sữa chua
                    </p>
                    <p>
                        Bước 1: Chuẩn bị xay sinh tố
                        <br/>
                        Gọt vỏ xoài cần lưu ý với xoài chín thì chỉ cần bóc nhẹ tay hoặc gọt nhẹ vỏ sao cho lấy được phần thịt xoài nhiều nhất, tránh bỏ đi quá nhiều phần thịt xoài trong quá trình gọt vỏ. Gọt xong thì cắt xoài thành những miếng nhỏ và cho vào máy xay sinh tố.
                    </p>
                    <p>
                      Bước 2: Xay sinh tố xoài và sữa chua
                      <br />
                      Sau khi thực hiện gọt xoài xong, tiếp tục cho thêm phần sữa chua, mật ong và nước lạnh vào cùng trong máy xay. Tiếp đó, bật máy và xay cho nhuyễn hỗn hợp đến khi các nguyên liệu trở nên quyện đều, nhuyễn mịn vào nhau là được.
                    </p>
                    <p>Để thưởng thức món sinh tố này, cần bỏ phần sinh tố xoài đã xay và ngăn mát của tủ lạnh trong khoảng 1 tiếng hoặc cho thêm đá bào vào trước khi thưởng thức.  Trộn đều để thu được thành phẩm là món xoài lạnh và ngon hơn.</p>
                    <div className='post__image'>
                            <img src={images.post4Image5} alt='cach lam sinh to xoai' />
                    </div>
                    <p style={{ textAlign: 'center' }}><em><strong>Hướng dẫn làm sinh tố xoài</strong> với sữa chua</em></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post4