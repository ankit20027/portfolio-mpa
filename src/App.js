import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar/MyNavbar';
import MyFooter from './Components/Footer/MyFooter';
import Home from './Components/Homepage/Home';
import Projects from './Components/Projects/Projects';
import './app.css';

function App() {
  return (
    <NextUIProvider>
      <MyNavbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          {/* <Route path='/about' element={<Home/>}/> */}
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='*' element={<Home/>}/>
        </Routes>
      </Router>
      <MyFooter />
    </NextUIProvider>

  );
}
export default App;