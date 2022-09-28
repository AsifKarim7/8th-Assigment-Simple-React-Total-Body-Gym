import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const { workout, handleAddToDetails } = props;
    const { img, name, info, age, time } = workout;
    return (
        <div className='workout'>
            <img src={img} alt="" />
            <div className='workout-info'>
                <h2>{name}</h2>
                <p><small>{info}</small></p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <div className='btn-div'>
                <button onClick={() => handleAddToDetails(workout)} className='btn-details'>
                    <p>Add to List</p>
                </button>
            </div>
        </div>
    );
};

export default Workout;