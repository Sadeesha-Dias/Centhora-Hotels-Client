import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/centhora/user/login" element={<UserLogin/>} />
          <Route path="/centhora/user/register" element={<UserRegistration/>} />
          <Route path="/user/:username" element={<ViewUser/>} />
          <Route path="/create/newbooking" element={<NewBooking/>} />
          <Route path="/centhora/about-us" element={<AboutUs/>} />
          <Route path="/centhora/contact-us" element={<ContactUs/>} /> */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
