import React, { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function Home() {
    // const [workouts, setWorkout] = useState(null);
    const [workouts, dispatch] = useWorkoutsContext();

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const data = await response.json();
            if (response.ok) {
                // setWorkout(data)
                dispatch({ type: 'SET_WORKOUT', payload: data });
            }
        }

        fetchWorkouts();

    }, [dispatch]);

    return (
        <div className='home'>
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home