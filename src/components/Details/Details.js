import React, { useState } from 'react';
import './Details.css';

const Details = (props) => {
    const { details } = props;

    let exerciseTime = 0;
    for (const exercise of details) {
        exerciseTime = exerciseTime + exercise.time;
    }

    const [breakTime, setBreak] = useState(0);
    const handleAddBreakTime = (btnValue) => {
        setBreak(btnValue)
    }

    return (
        <div className='details'>
            <div>
                <button onClick={() => handleAddBreakTime(10)}>10s</button>
                <button onClick={() => handleAddBreakTime(20)}>20s</button>
                <button onClick={() => handleAddBreakTime(30)}>30s</button>
                <button onClick={() => handleAddBreakTime(40)}>40s</button>
                <button onClick={() => handleAddBreakTime(50)}>50s</button>
            </div>
            <h4>Exercise time: {exerciseTime}</h4>
            <h4>Break Time: {breakTime}</h4>

        </div>
    );
};

export default Details;