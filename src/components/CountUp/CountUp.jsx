import React, { useState, useEffect } from 'react'

import './CountUp.css'

const CountUp = ({ endNumber, duration }) => { //duration of count in second

    const [count, setCount] = useState(0);

    useEffect(() => {
        let startNumber = 0;

        //if zero, return
        if(startNumber === endNumber) return;
        
        //find duration per increment
        let incrementTime = (duration / endNumber) * 1000;
        console.log(incrementTime);
        let timer = setInterval(() => {
            startNumber += 1;
            setCount(startNumber);
            if(startNumber === endNumber) clearInterval(timer)
        }, incrementTime)

    }, [endNumber, duration])

    return (
        <div className='countUp'>{(count < 10 ? '0' : '') + count}</div>
    )
}

export default CountUp