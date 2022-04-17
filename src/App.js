import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/services' element={<Services></Services>}>Services</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/register' element={<Register></Register>}>About</Route>
        <Route path='/login' element={<Login></Login>}>About</Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
