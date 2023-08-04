import React from 'react'
import InputComponent from '../components/Input'

const ShortlistStudentForm = () => {
    // useEffect(() => {
    //     const unsubscribe = onSnapshot(
    //         query(collection(db, 'users')),
    //         (querySnapshot) => {
    //             const usersData = [];
    //             querySnapshot.forEach((doc) => {
    //                 usersData.push({ id: doc.id, ...doc.data() });
    //             });
    //             dispatch(setUsers(usersData));
    //         },
    //         (error) => {
    //             console.log('Error fetching users:', error)
    //         }
    //     );
    //     return () => {
    //         unsubscribe();
    //     };

    // }, []);
  return (
    <div className='wrapper'>
        <h2>Shortlist Student</h2>
         <InputComponent
                    
                    placeholder='Search Student By Name'
                    type="text"
                    required={true}
        />
    </div>
  )
}

export default ShortlistStudentForm