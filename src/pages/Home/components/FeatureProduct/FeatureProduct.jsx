import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
import productData from '../../../../assets/data/productData.js'
import images from '../../../../assets/images'
import './FeatureProduct.css'

const FeatureProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (index) => {
      setCurrentSlide(index);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(currentSlide === productData.length - 1 ? 0 : currentSlide + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide])

  return (
    <section className='featureProduct section-block'>
        <h3 className='section-heading'>
          Sản Phẩm
        </h3>
        <div className='featureProduct__wrapper' style={{backgroundImage: `url(${images.productBackground})`}}>
          <div className='featureProduct__btn'>
              <div className={currentSlide === 0 ? 'active' : ''} onClick = {() => handleSlide(0)}>
                <strong>01</strong>
                <span>CÀ PHÊ RANG XAY</span>
              </div>
              <div className={currentSlide === 1 ? 'active' : ''} onClick = {() => handleSlide(1)}>
                <strong>02</strong>
                <span>CÀ PHÊ HÒA TAN</span>
              </div>
          </div>
          <div className='featureProduct__container'>

            <div className='featureProduct__slides'>
              {productData.map((product, index) => (
                  <div className={`featureProduct__item ${currentSlide === index ? 'current' : 'slide'}`} style={{left: `-${index*50}%`}} key={'product' + index}>
                      <div className='featureProduct__item-info'>
                        <div className='product-name'>
                            {product.name}
                        </div>
                        <div className='product-description'>
                            {product.description}
                        </div>
                        <br/>
                        <div />
                        <Link to='/san-pham' className='readmore-link'>
                            ĐẾN TRANG SẢN PHẨM
                        </Link>
                      </div>
                      <div className='featureProduct__item-image'>
                            <img src={product.url} alt='product-img' />
                      </div>
                  </div>
              ))}
            </div>
          </div>

        </div>
    </section>
  )
}

export default FeatureProduct