import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Activities.css';

const Activities = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const handleAddToDetails = (workout) => {
        console.log(workout);
    }

    return (

        <div className='activities-container'>

            <div className='workouts-container'>
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                        handleAddToDetails={handleAddToDetails}
                    ></Workout>)
                }
            </div>

            <div className='details-container'>
                <h3>hello details</h3>
            </div>

        </div>
    );
};

export default Activities;