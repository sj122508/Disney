import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';
 
import Detail from './components/Detail';
import Login from './components/Login';
// 6:17 https://www.youtube.com/watch?v=0mVbNp1ol_w
// npm install firebase --save
// npm install firebase-tools --save
function App() {
  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
// 2:28