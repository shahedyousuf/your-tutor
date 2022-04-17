import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Home/Banner/Banner';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/'>Home</Route>
        <Route path='/'>Home</Route>
        <Route path='/'>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
