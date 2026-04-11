import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style/Component.css'
// import App from './App.jsx'
import { LandingPage } from './Pages/LandingPage.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { AdminDashboard } from './Pages/AdminDashboard.jsx'
import { VoterDashboard} from './Pages/VoterDashboard.jsx'
import { LoginForm } from './Components/LoginForm.jsx'
import { RegistrationForm } from './Components/RegistrationForm.jsx'
import { LandingComponent } from './Components/LandingComponent.jsx'
import { CreateElection } from './Components/CreateElection.jsx'
import { AddCandidate } from './Components/AddCandidate.jsx'
import { ViewResult } from './Components/ViewResult.jsx'
import { StartElection } from './Components/StartElection.jsx'
import { ElectionList } from './Components/ElectionList.jsx'
import { StartElecionForm } from './Components/StartElecionForm.jsx'
import { PageNotFound } from './Pages/PageNotFound.jsx'
import { StopElectionForm } from './Components/StopElectionForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} >
          <Route path='/' element={<LandingComponent />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registration' element={<RegistrationForm />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}></Route>
        <Route >
          <Route path='/createElection' element={<CreateElection />} />
          <Route path='/addCandidate' element={<AddCandidate />} />
          <Route path='/startElection' element={<StartElection />} />
          <Route path='/viewResult' element={<ViewResult />} />
          <Route path='/admin/start/:electionId' element={<StartElecionForm />} />
          <Route path='/admin/end/:electionId' element={<StopElectionForm/>} />
        </Route>
        <Route path='/Voter' element={<VoterDashboard />} >
          <Route index element={<ElectionList/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
