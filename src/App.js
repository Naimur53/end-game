import './App.css';
import useFirebase from './hooks/useFirebase';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import TopBar from './Components/SmallComponents/TopBar/TopBar';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import AddExperience from './Components/Pages/AddExperience/AddExperience';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import AddAdmin from './Components/Pages/Dashboard/AddAdmin/AddAdmin';
import AdminRoute from './Components/Pages/AdminRoute/AdminRoute';
import ManageAllRequest from './Components/Pages/Dashboard/ManageAllRequest/ManageAllRequest';
import ManageAllPost from './Components/Pages/Dashboard/ManageAllPost/ManageAllPost';
import SignUp from './Components/Pages/SignUp/SignUp';
import BlogDetails from './Components/Pages/BlogDetails/BlogDetails';
import BlogPage from './Components/Pages/BlogPage/BlogPage';
function App() {
  const { handleSignOut } = useFirebase();
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar></TopBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/addExperience' element={<PrivateRoute><AddExperience></AddExperience></PrivateRoute>}></Route>
          <Route path='/blogs' element={<BlogPage></BlogPage>}></Route>
          <Route path='/details/:id' element={<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>}></Route>

          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/dashboard' element={<AdminRoute><Dashboard></Dashboard></AdminRoute>}>
            <Route path='/dashboard' element={<AdminRoute><ManageAllRequest></ManageAllRequest></AdminRoute>}></Route>
            <Route path='/dashboard/manageAllRequest' element={<AdminRoute><ManageAllRequest></ManageAllRequest></AdminRoute>}></Route>
            <Route path='/dashboard/manageAllPost' element={<AdminRoute><ManageAllPost></ManageAllPost></AdminRoute>}></Route>
            <Route path='/dashboard/addBlog' element={<AdminRoute><AddExperience></AddExperience></AdminRoute>}></Route>
            <Route path='/dashboard/makeAdmin' element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
