import React from 'react'

import './DefaultLayout.css';
import Header from '../../Header/Header'
import ScrollHeight from '../../ScrollHeight/ScrollHeight'
import Footer from '../../Footer/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <ScrollHeight />
        <div className='page'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout