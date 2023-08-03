import React from 'react'
import {NavLink} from 'react-router-dom';
import './styles.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
const Navbar = () => {
  const [user,loading,error] = useAuthState(auth);
  return (
    <div className='navbar'>
    <div className='links'>
      <NavLink to='/' >Home</NavLink>
      { ! user &&<NavLink to='/signup' >Signup</NavLink>}
      <NavLink to='/starts-for-free' >Start for free</NavLink>
      <NavLink to='/courses' >Courses</NavLink>
      <NavLink to='/profile' >Profile</NavLink>
      <NavLink to='/adminpage' >Admin ?</NavLink>
     
    </div>
  </div>
  )
}

export default Navbar