import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const AllStudents = () => {
  const navigate= useNavigate();
  return (
    <div className='wrapper'>
        <h2>Students</h2>
        <Button
          width={'100px'}
          text={'Shortlist Students'}
          onClick={()=>{navigate('/shortlist_students')}}
        />
    </div>
  )
}

export default AllStudents