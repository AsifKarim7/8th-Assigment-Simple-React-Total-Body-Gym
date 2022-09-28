import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const { workout } = props;
    const { img, name, info, age, time } = workout;
    return (
        <div className='workout'>
            <img src={img} alt="" />
            <div className='workout-info'>
                <h3>{name}</h3>
                <p><small>{info}</small></p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <div className='btn-div'>
                <button className='btn-details'>
                    <p>Add to List</p>
                </button>
            </div>
        </div>
    );
};

export default Workout;