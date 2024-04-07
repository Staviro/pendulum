import React, { useState } from 'react';
import NextHour from '../NextHour/NextHour';
import dateHelper from '../../scripts/date.helper';

import './Time.css';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
    setTimeout(function() {
        let date = new Date();
        let result = {
            Day: date.getDate(),
            Year: date.getFullYear(),
            Month: dateHelper.getMonthString(date.getMonth()),
            Hour: date.getHours(),
            Minutes: date.getMinutes(),
            Seconds: date.getSeconds(),
            DateObject: date
        };
        setCurrentTime(result);
    }, 1000);
    
    return (
        <div className='time-container'>
            <div className='time-content'>
                <div className='top-card'>
                    <div>{ currentTime.Year } { currentTime.Month} {currentTime.Day}</div>
                </div>
                <div className='card-list'>
                    <div className='time-card'>
                        <div className='time-card-content'>
                            <div className='time-card-value'>
                                { currentTime.Hour < 10 ? "0" + currentTime.Hour : currentTime.Hour }
                            </div>
                        </div>
                    </div>
                    <span>:</span>
                    <div className='time-card'>
                        <div className='time-card-content'>
                            <div className='time-card-value'>
                                { currentTime.Minutes < 10 ? "0" + currentTime.Minutes : currentTime.Minutes }
                            </div>
                        </div>
                    </div>
                    <span>:</span>
                    <div className='time-card'>
                        <div className='time-card-content'>
                            <div className='time-card-value'>
                                { currentTime.Seconds < 10 ? "0" + currentTime.Seconds : currentTime.Seconds }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <NextHour time={ currentTime.DateObject } />
                </div>
            </div>
        </div>
    )
}

export default Time;