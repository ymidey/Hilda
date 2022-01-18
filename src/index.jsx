import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Personnages from './pages/Personnages'
import Header from './components/Header'
import Questionnaire from './pages/Questionnaire'
import Error from './components/Error'
import LeaderBoard from './components/LeaderBoard'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personnages" element={<Personnages />} />
      <Route path="/Questionnaire" element={<Questionnaire />} />
      <Route path="*" element={<Error />} />
      <Route path="/leaderBoard" element={<LeaderBoard />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
)
