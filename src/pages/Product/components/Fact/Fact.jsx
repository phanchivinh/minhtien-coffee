import React from 'react'

import TypeWriterComponent from 'typewriter-effect';

import './Fact.css'
const Fact = () => {
  const facts = [ 'Việt Nam là nước xuất khẩu cà phê lớn thứ 2 thế giới', 
                  'Cà phê thực chất là nhân của cà phê', 
                  'Những địa phương có thể trồng cà phê nằm trong "vành đai cà phê"', 
                  'Cà phê được phát hiện bởi một người chăn dê' ];

                  

  return (
    <div className='fact green-background'>
        <TypeWriterComponent
            options={{
              strings: [...facts],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              delay: 15,
              deleteSpeed:15,
              cursor:''
            }}  

        />
    </div>
  )
}

export default Fact