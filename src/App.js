import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthenticationPage from './Pages/AuthenticationPage';
import LandingPage from './Pages/LandingPage';
import Footer from './components/Footer.js';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Profile from './Pages/Profile';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { set_user } from './redux/actions/actionCreators';
import EditProfile from './Pages/EditProfile';
import PrivateRoutes from './components/PrivateRoutes';
import AdminAuthentication from './Pages/AdminAuthentication';
import AdminPrivateRoutes from './components/AdminPrivateRoutes';
import AdminPage from './Pages/AdminPage';
import AllStudents from './Pages/AllStudents';
import AllTeachers from './Pages/AllTeachers';
import AllCourses from './Pages/AllCourses';
import AddCourses from './Pages/AddCourses';
import CourseDetails from './Pages/CourseDetails';
import Courses from './Pages/Courses';
import ShortlistStudentForm from './Pages/ShortlistStudentForm';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscibeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscibeSnapshot = onSnapshot(
          doc(db, "students", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                set_user({
                  name: userData.name,
                  number: userData.number,
                  email: user.email,
                  uid: user.uid,
                  profilePic: userData.profilePic, // added profile pic url to doc
                  applicationStatus: userData.applicationStatus,
                  selectedCourse: userData.selectedCourse
                })
              )

            }
          },
          (error) => {
            console.log('Error fetching user data: ', error)
          }
        );
        return () => {
          unsubscibeSnapshot()
        }
      }
    })
    return () => {
      unsubscibeAuth()
    };
  }, [])
  return (
    <div className="App">
      <ToastContainer />
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<AuthenticationPage />} />
        <Route path='/adminlogin' element={<AdminAuthentication />} />
        <Route element={<AdminPrivateRoutes />}>
          <Route path='/adminPage' element={<AdminPage />}></Route>
          <Route path='/allstudents' element={<AllStudents />}></Route>
          <Route path='/allteachers' element={<AllTeachers />}></Route>
          <Route path='/allcourses' element={<AllCourses />}></Route>
          <Route path='/addcourses' element={<AddCourses />}></Route>
          <Route path='/shortlist_students' element={<ShortlistStudentForm />}></Route>
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/coursedetails/:id' element={<CourseDetails />}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
