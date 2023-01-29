import React from 'react';
import { Link } from 'react-router-dom'

import images from '../../assets/images'
import { publicRoutes } from '../../routes'
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer' id='footer'>
        <div className='footer__wrapper'>
            <div className='footer__logo'>
                <img src={images.aroundLogo} alt='footer-logo' />
            </div>

            <div className='footer__contact'>
                <h6>Liên hệ</h6>
                <div>
                    <p>
                        Email
                        <br />
                        info@minhtiencoffee.com
                    </p>
                    <p>
                        Mobile
                        <br />
                        <a href='tel:+842422044666'>0242.20.44.666</a>
                        <br />
                        <a href='tel:+84372589589'>0372.589.589</a>
                    </p>
                </div>
                
            </div>
            <div className='footer__copyright'>
                <h6>2022 © MINH TIEN COFFEE</h6>
                <p>Chúng tôi hướng đến chất lượng với những mẻ cà phê đượm nắng, luôn trăn trở cho chất lượng hạt cà phê đạt tiêu chuẩn cao nhất với các công tuyển.</p>
                <p className='footer__social-block'>
                    <img src={images.facebook} alt='facebook-logo' />
                    <img src={images.instagram} alt='instagram-logo' />
                </p>
            </div>
            <div className='footer__address'>
                <h6>Địa chỉ</h6>
                <div>
                    <p>
                        Trụ sở: Geleximco Building số 36 Hoàng Cầu
                        <br />
                        P. Ô Chợ Dừa, Q. Đống Đa, TP. Hà Nội
                    </p>
                    <p>
                        Không gian thưởng thức, trải nghiệm cà phê:
                        <br />
                        75 Hàng Mã, P. Hàng Mã, Q. Hoàn Kiếm, TP. Hà Nội
                    </p>
                </div>
            </div>
        </div>
        <div className='footer__navbar'>
            <ul className='footer__navbar-list'>
                {
                    publicRoutes.map((route, index) => {
                        if(route.title !== 'Trang chủ')
                            return <li className='footer__navbar-item' key={'footer__navbar-item' + index}><Link to={route.path}>{route.title}</Link></li>
                        else return undefined;
                    })
                    
                }
            </ul>
        </div>
    </section>
  )
}

export default Footer