import React from 'react'

import images from '../../../../assets/images';
import './ProductSection.css'
const ProductSection = ( { product, productId } ) => {

  
  return (
    <section id={productId} className='productSection section-block'>
        <h3 className='section-heading'>{product.name}</h3>
        <div className='productSection__wrapper' style={{backgroundImage: `url(${images.productBackground})`}}>
            <h4>{product.name}</h4>
            <div className='productSection__content'>
                <p className='productSection__content-subTitle'>{product.subTitle}</p>
                <p className='productSection__content-description'>{product.description}</p>
                <a className='readmore-link' href='/'>Chọn loại coffee</a>
            </div>
            <div className='productSection__image'>
                <img src={product.image} alt={`${product.name}`} />
            </div>
        </div>
    </section>
  )
}

export default ProductSection