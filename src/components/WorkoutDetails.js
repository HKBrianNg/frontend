import React from 'react'

function WorkoutDetails({ workout }) {

  return (
    <div className='workout-details'>
      <h4>Woutout Details</h4>
      <p>{workout.title}</p>
      <p><strong>Load:</strong>{workout.load}</p>
      <p><strong>Number of Reps:</strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails