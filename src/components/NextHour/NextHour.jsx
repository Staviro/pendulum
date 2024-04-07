import React, { useState } from 'react';
import './NextHour.css';

const NextHour = (props) => {
    function remainingTime() {
        let date = new Date(props.time);
        let remainingMinutes = 60 - date.getMinutes() - 1;
        let remainingSeconds = 60 - date.getSeconds() - 1;
        let percentage = ((date.getMinutes() / 60) * 100).toFixed(2);
        return {
            Minutes: remainingMinutes,
            Seconds: remainingSeconds,
            Percentage: percentage
        }
    }
    const [remaining, setRemaining] = useState(remainingTime());
    setTimeout(function() {
        setRemaining(remainingTime())
    }, 1000);
    return (
        <div className='next-hour'>
             <div className='next-hour-text'>{remaining.Minutes < 10 ? "0" + remaining.Minutes : remaining.Minutes } minutes and { remaining.Seconds < 10 ? "0" + remaining.Seconds : remaining.Seconds } seconds until next hour</div>
             <div className='percentage-container'>
                <div className='percentage' style={{ width: `${remaining.Percentage}%` }}></div>
             </div>
        </div>
    )
}  


export default NextHour;