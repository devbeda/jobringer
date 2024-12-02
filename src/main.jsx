import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Jobs from './pages/Jobs/Jobs.jsx'
import Pricing from './pages/Pricing/Pricing.jsx'
import ActiveEmployers from './pages/ActiveEmployers/ActiveEmployers.jsx'
import JobseekerLogin from './pages/JobseekerLogin/JobSeekerLogin.jsx'
import EmployerLogin from './pages/EmployerLogin/EmployerLogin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='jobs' element={<Jobs/>} />
      <Route path='pricing' element={<Pricing/>} />
      <Route path='active-employers' element={<ActiveEmployers/>}/>
      <Route path='jobseeker-login' element={<JobseekerLogin/>}/>
      <Route path='employer-login' element={<EmployerLogin/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
