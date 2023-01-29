import React, { useEffect } from 'react'

import { FarmHousehold, Export, Distribution, Registration, Contact, ContactInfo } from './components'
import { partnersImages } from '../../assets/images'
import { FakeHeader } from '../Manufacture/components'
const Partner = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className='partner'>
        <FakeHeader imageSrc={partnersImages.fakeheader} altText='partner-header'/>
        <FarmHousehold />
        <Export />
        <Distribution />
        <Registration />
        <Contact />
        <ContactInfo />
    </div>
  )
}

export default Partner