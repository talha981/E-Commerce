import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import { AuthProvider } from './Components/AuthContext';
import AddToCart from './Components/AddToCart';
import ProtectedRoutes from './Components/ProtectedRoutes';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route 
            path='/addtocart' 
            element={
              <ProtectedRoutes>
                <AddToCart />
              </ProtectedRoutes>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
