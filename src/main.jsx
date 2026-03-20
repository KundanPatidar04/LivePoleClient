import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../public/style/Component.css'
// import App from './App.jsx'
import { LandingPage } from './Pages/LandingPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { AdminDashboard } from './Pages/AdminDashboard.jsx'
import { VoterDashboard} from './Pages/VoterDashboard.jsx'
import { VotingPage } from './Pages/VotingPage.jsx'
import { LoginForm } from './Components/LoginForm.jsx'
import { RegistrationForm } from './Components/RegistrationForm.jsx'
import { Landincomponent } from './Components/Landincomponent.jsx'
import { CreateElection } from './Components/CreateElection.jsx'
import { AddCandidate } from './Components/AddCandidate.jsx'
import { ViewResult } from './Components/ViewResult.jsx'
import { StartElection } from './Components/StartElection.jsx'
import { ElectionList } from './Components/ElectionList.jsx'
import { StartElecionForm } from './Components/StartElecionForm.jsx'
import { PageNotFound } from './Pages/PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} >
          <Route path='/' element={<Landincomponent />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registration' element={<RegistrationForm />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route path='createElection' element={<CreateElection />} />
          <Route path='addCandidate' element={<AddCandidate />} />
          <Route path='startElection' element={<StartElection />} />
          <Route path='viewResult' element={<ViewResult />} />
          <Route path='/admin/:electionId' element={<StartElecionForm />} />
        </Route>
        <Route path='/Voter' element={<VoterDashboard />} >
          <Route index element={<ElectionList/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
