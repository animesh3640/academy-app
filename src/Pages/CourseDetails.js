import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase';
import { toast } from 'react-toastify';
import Button from '../components/Button';

const CourseDetails = () => {
    let [course, setCourse] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    const getData = async () => {
        try {
            const docRef = doc(db, "courses", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCourse({ id: id, ...docSnap.data() });
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such Podcast!");
                toast.error("No such Podcast!");
                navigate("/podcasts");
            }
        } catch (e) {
            toast.error(e.message);
        }
    };

    return (
        <div className='wrapper'>
            <div className='course-details-header'>
                <h2>{course.name}</h2>
                <Button
                    width={'80px'}
                    text={'Enroll Now !'}
                />
            </div>
            <div className='banner-wrapper'>
                <img src={course.bannerImage} alt="Course Banner Image" />
            </div>
            <p className='course-description'
                style={{ border: 'none', fontWeight: 'bolder' }}
            ><div>Tutor : {course.teacher}</div>  <div>Course Fee : {course.courseFee}  &#8377;</div>
            </p>
            <p className='course-description'
                style={{ border: 'none', fontWeight: 'bolder' }}
            >Course Overview</p>
            <p className='course-description'>{course.desciption}</p>
        </div>
    )
}

export default CourseDetails