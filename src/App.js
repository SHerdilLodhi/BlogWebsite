import Main from './Components/Pages/Main';
import Navbar from './Components/Data/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Data/Signup/Signup';
import Login from './Components/Data/Login/Login';
import Home from './Components/Pages/Home/Home';
import Protected from './Components/Data/Protected';
import Profile from './Components/Pages/Profile/Profile';
import AddBlog from './Components/Pages/AddBlog/AddBlog';
import BlogPoster from './Components/Data/BlogPoster';
import BlogPage from './Components/Data/BlogPage';

function App() {


  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route element={<Main/>} path="/" />
      <Route element={<Signup/>} path="/signup" />
      <Route element={<Login/>} path="/login" />
      
      
      
      <Route element={<Protected/>}>
      <Route element={<BlogPoster/>} path="/blogposter"/> 
      <Route element={<BlogPage/>} path="/blogpage"/>             
      <Route element={<AddBlog/>} path="/addblog"/>       
      <Route element={<Home/>} path="/home"/>
      <Route element={<Profile/>} path="/profile"/>
           

      </Route>
      


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
