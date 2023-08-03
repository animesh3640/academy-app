import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { clear_user } from '../redux/actions/actionCreators';
const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleLogout() {
        signOut(auth)
            .then(() => {
                toast.success('user logged out !');
                navigate('/')
                dispatch(clear_user())
            })
            .catch((error) => {
                toast.error(error.message)
            })

    }
    const user = useSelector(state => state.user);
 
    return (
        <div className='wrapper'>
            {user.name ? (
                <>
                    <img src={user.profilePic} alt="" height={"160px"} width={"140px"}
                        style={{ borderRadius: '10%' }}
                    />
                    <p>{user.name}</p>
                    <p>{user.uid}</p>
                    <p> Number : {user.number}  Email : {user.email} </p>
                    <Button
                        width={'15%'}
                        text={'Edit Profile'}
                        onClick={()=>{navigate('/editprofile')}}
                        disabled={false}
                    />
                    <Button
                        width={'15%'}
                        text={'Logout'}
                        onClick={handleLogout}
                        disabled={false}
                    />
                   
                </>
            ):"Please Login First"}
        </div>
    )
}

export default Profile