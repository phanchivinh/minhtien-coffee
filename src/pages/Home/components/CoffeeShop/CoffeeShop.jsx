import React, { useEffect, useState, useRef } from 'react';

import coffeeShopImages from '../../../../assets/data/coffeeShopImages';
import CountUp from '../../../../components/CountUp/CountUp';
import './CoffeeShop.css';

const CoffeeShop = () => {
    const STAFF_NUMBER = 6;
    const BRANCH_NUMBER = 84;
    const DURATION = 3 //duration of count in second

    const counterRef = useRef();
    const [showIndex, setShowIndex] = useState(0);
    const [countTrigger, setCountTrigger] = useState(false);

    const handleCountTrigger = () => {
        const winScrollBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
        const counterBottom = counterRef.current.offsetTop + counterRef.current.clientHeight;

        if(winScrollBottom > counterBottom) {
            setCountTrigger(true);
        } else {
            setCountTrigger(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleCountTrigger);
        const interval = setInterval(() => {
            setShowIndex(showIndex === coffeeShopImages.length - 1 ? 0 : showIndex + 1)
        }, 3000)

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleCountTrigger);
        }
    },[showIndex])

    return (
        <section className='coffeeShop section-block'>
            <h3 className='section-heading'>Coffee Shop</h3>
            <div className='coffeeShop__wrapper'>
                <div className='coffeeShop__into'>
                    <div className='coffeeShop__into-counter'>
                        <div className='coffeeShop__into-left' ref={counterRef}>
                            <h6>
                                Số chi nhánh
                                <br />
                                <span className='counter'>
                                    {countTrigger && <CountUp endNumber={STAFF_NUMBER} duration={DURATION} />}
                                </span>
                            </h6>
                        </div>
                        <div className='coffeeShop__into-right'>
                            <h6>
                                Nhân viên
                                <br />
                                <span className='counter'>
                                    {countTrigger && <CountUp endNumber={BRANCH_NUMBER} duration={DURATION} />}
                                </span>
                            </h6>
                        </div>
                        <div className='coffeeShop__into-description'>
                            <p>Định hướng của chúng tôi về mỗi không gian thưởng thức cà phê là độc đáo ở mỗi kiến trúc, trải nghiệm và cà phê đều mang đến các giá trị nguyên bản.</p>
                            <a className='readmore-link' href='san-pham'>Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>

                <div className='coffeeShop__slider'>
                    <div className='coffeeShop__slider-list' style={{ width: `${coffeeShopImages.length * 100}%` }}>
                        {coffeeShopImages.map((img, index) => (
                            <div className={`coffeeShop__slide green-background ${index === showIndex ? 'show' : ''}`} key={'coffeeShop__slide ' + index} style={{ width: `${1 / coffeeShopImages.length}`, position: 'relative', left: `-${index * (1 / coffeeShopImages.length) * 100}%` }}>
                                <div className='coffeeShop__slide-image'>
                                    <img src={img.src} alt={img.name} />
                                </div>
                                <div className='coffeeShop__slide-text'>
                                    <p className='coffeeShop__slide-quote'>“Nơi mang đến hương vị cà phê ưa chuộng và không khí thân quen, thoải mái, luôn chào đón những tâm hồn yêu cà phê đến nghỉ chân, kết nối và sáng tạo."</p>
                                </div>
                                <div className='coffeeShop__slide-bottom'>
                                    <div>
                                        75 Hàng Mã,
                                        <br />
                                        Phường Hàng Mã,
                                        <br />
                                        Quận Hoàn Kiếm,
                                        <br />
                                        TP.Hà Nội
                                    </div>
                                    <div>
                                        Mở cửa mỗi ngày
                                        <br />
                                        7:00 am - 10:00 pm
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoffeeShop