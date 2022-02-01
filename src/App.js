import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { PageName } from './common/pages'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Detail from './components/Detail'
import Login from './components/Login'
// 7:16 https://www.youtube.com/watch?v=0mVbNp1ol_w
// npm install firebase --save
// npm install firebase-tools --save
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path={PageName.Home} element={<Home />} />
          <Route path={`${PageName.Detail}:id`} element={<Detail />} />
          {/* <Route path='/detail/:id' element={<Detail />} /> */}
          <Route path={PageName.Login} element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
// 2:28
