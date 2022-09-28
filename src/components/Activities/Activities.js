import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Workout from '../Workout/Workout';
import './Activities.css';

const Activities = () => {
    const [workouts, setWorkouts] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const handleAddToDetails = (workout) => {
        const newDetails = [...details, workout];
        setDetails(newDetails);
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
                <Details
                    details={details}
                ></Details>
            </div>

        </div>
    );
};

export default Activities;