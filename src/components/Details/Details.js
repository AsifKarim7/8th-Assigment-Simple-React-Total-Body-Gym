import React, { useState } from 'react';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    const { details } = props;


    let exerciseTime = 0;
    for (const exercise of details) {
        exerciseTime = exerciseTime + exercise.time;
    }


    const [breakTime, setBreak] = useState(localStorage.getItem('breaktime'));

    const handleAddBreakTime = (btnValue) => {
        setBreak(btnValue)
        localStorage.setItem('breaktime', btnValue)
    }



    const handleCompleteBtn = () => toast.info("Congratulations. You Completed Today's Activity.");

    return (
        <div className='details'>

            <div className='details-head-div'>
                <h2>Asif Karim</h2>
                <p>Senior Instructor</p>
                <p>Age: 24</p>
                <p>Email: asifkarim275@gmail.com</p>
            </div>

            <div className='details-extra-header'>
                <h2>Add A Break</h2>
            </div>

            <div className='break-btn'>
                <button onClick={() => handleAddBreakTime(10)}>10s</button>
                <button onClick={() => handleAddBreakTime(20)}>20s</button>
                <button onClick={() => handleAddBreakTime(30)}>30s</button>
                <button onClick={() => handleAddBreakTime(40)}>40s</button>
                <button onClick={() => handleAddBreakTime(50)}>50s</button>
            </div>

            <div className='details-extra-header'>
                <h2>Exercise Details</h2>
            </div>

            <div className='exercise-time'>
                <p>Exercise time: {exerciseTime}</p>
            </div>
            <div className='break-time'>
                <p>Break Time: {breakTime}</p>
            </div>

            <div className='toast-btn-div'>
                <button onClick={handleCompleteBtn} className='toast-btn'>Activity Completed</button>
                <ToastContainer />
            </div>


        </div >
    );
};

export default Details;