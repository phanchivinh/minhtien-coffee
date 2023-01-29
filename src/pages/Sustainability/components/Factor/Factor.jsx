import React from 'react'

import './Factor.css'
import { factorIcons } from '../../../../assets/images'
const Factor = () => {
  return (
    <section className='factor green-background'>
        <div className='factor__wrapper'>
            <h4>Minh Tiến xây dựng <br /> mô hình cà phê bền vững trên 3 yếu tố</h4>
            <div className='factor__item-list'>
                {factorIcons.map((icon, index) => (
                    <div className='factor__item' key={`factor-item-${index}`}>
                        <a href={icon.id}>
                            <img src={icon.path} alt={icon.name} />
                            <div>{icon.name}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Factor