import React, { useEffect } from 'react'

import VideoIntro from '../../components/VideoIntro/VideoIntro';
import CoffeeShop from '../Home/components/CoffeeShop/CoffeeShop'
import { Fact, ProductSection, Souvenir } from './components';
import { coffiliaRangXay, coffiliaHoaTan } from '../../assets/data/productData'
import videos from '../../assets/videos';
const Product = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className='product'>
        <VideoIntro videoSrc={videos.videoSanPham} text='Tinh hoa từ bàn tay và văn hóa đại ngàn'/>
        <ProductSection product={coffiliaRangXay} productId = 'coffilia-rang-xay'/>
        <Fact />
        <ProductSection product={coffiliaHoaTan} productId='coffilia-hoa-tan' />
        <Souvenir />
        <CoffeeShop />
    </div>
  )
}

export default Product