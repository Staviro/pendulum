import React, { useState } from 'react';
import NextHour from '../NextHour/NextHour';

import './Time.css';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
    setTimeout(function() {
        setCurrentTime(new Date().toUTCString())
    }, 1000);
    
    return (
        <div className='time-container'>
            <div className='time-content'>
                <div className='time'>
                    { currentTime }
                </div>
                <NextHour time={currentTime} />
            </div>
        </div>
    )
}

export default Time;