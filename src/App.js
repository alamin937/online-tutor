import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/Home/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Request from './AuthProvider/Tutor/Tutor/Request/Request';
import Student from './AuthProvider/Tutor/Tutor/Student/Student';
import Tuition from './AuthProvider/Tutor/Tutor/Tuition/Tuition';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddAdmin from './components/DashBoard/AddAdmin/AddAdmin';
import AddTutor from './components/DashBoard/AddTutor/AddTutor';
import Order from './components/DashBoard/Order/Order';
import Book from './components/Book';
import DeleteTeacher from './components/DashBoard/DeleteTeacher/DeleteTeacher';

function App() {
  return (
    <div className="">
       <AuthProvider>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<PrivateRoute>
            <About></About>
          </PrivateRoute>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/request' element={<PrivateRoute>
            <Request></Request>
          </PrivateRoute>}></Route>
          <Route path='/student' element={<PrivateRoute>
            <Student></Student>
          </PrivateRoute>}></Route>
          <Route path='/jobs' element={<PrivateRoute>
            <Tuition></Tuition>
          </PrivateRoute>}></Route>
          <Route path='/dashboard' element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}>
            <Route path='/dashboard/addadmin' element={<AddAdmin></AddAdmin>}></Route>
            <Route path='/dashboard/addtutor' element={<AddTutor></AddTutor>}></Route>
            <Route path='/dashboard/addorder' element={<Order></Order>}></Route>
            <Route path='/dashboard/deleteteacher' element={<DeleteTeacher></DeleteTeacher>}></Route>
          </Route>
          <Route path='/book/:bookId' element={<Book></Book>}></Route>
        </Routes>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
