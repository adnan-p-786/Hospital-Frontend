import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Service from './pages/Service/Service.jsx'
import FreeService from './pages/Service/FreeService.jsx'
import Contact from './pages/contact/Contact.jsx'
import Appointment from './pages/Appointment/Appointment.jsx'
import Doctor from './pages/Doctors/Doctor.jsx'
import store from './App/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Single Service',
        element:<Service/>
      },
      {
        path:'/Free Service',
        element:<FreeService/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'/Appointment',
        element:<Appointment/>
      },
      {
        path:'/Doctors',
        element:<Doctor/>
      },
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
