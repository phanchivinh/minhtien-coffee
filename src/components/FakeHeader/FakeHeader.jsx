import React from 'react'

import './FakeHeader.css'
const FakeHeader = ( { imageSrc, altText } ) => {
  return (
    <section className='fakeHeader'>
        <img src={imageSrc} alt={altText} />
    </section>
  )
}

export default FakeHeader