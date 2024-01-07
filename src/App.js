import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/register';
import Login from './components/login';
import Authorize from './components/authorize';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/web/register" element={<Register/>}/>
          <Route exact path="/web/login" element={<Login/>}/>
          <Route exact path="/web/authorize" element={<Authorize/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
