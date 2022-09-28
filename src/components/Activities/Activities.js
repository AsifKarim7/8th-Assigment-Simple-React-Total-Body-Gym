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

    return (
        <div className='activities-container'>

            <div className='workouts-container'>
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                    ></Workout>)
                }
            </div>

            <div className='details-container'>

            </div>

        </div>
    );
};

export default Activities;