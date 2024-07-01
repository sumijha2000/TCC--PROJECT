import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/pages/About.jsx'
import Blog from './components/pages/Blog.jsx'
import Contact from './components/pages/Contact.jsx'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Submit from './components/pages/Submit.jsx'
import Upload from './components/pages/Upload.jsx'
import Uploadpage from './components/pages/Uploadpage.jsx'
import Signup from './components/pages/Signup.jsx'
import SignupPage from './components/pages/SignupPage.jsx'
import Technology from './components/pages/Technology.jsx'
import Medicine from './components/pages/Medicine.jsx'
import Transportation from './components/pages/Transportation.jsx'
import Fashion from './components/pages/Fashion.jsx'
import Food from './components/pages/Food.jsx'
import Science from './components/pages/Science.jsx'
import Comm from './components/pages/Comm.jsx'
import Health from './components/pages/Health.jsx'
import Sports from './components/pages/Sports.jsx'
import Politics from './components/pages/Politics.jsx'
import Env from './components/pages/Env.jsx'
import Culture from './components/pages/Culture.jsx'
import Eco from './components/pages/Eco.jsx'
import UserInventions from './components/pages/UserInventions.jsx'
import UploaderUserData from './components/pages/UploaderUserData.jsx'

// import Eco from './components/pages/Eco.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },

  {
    path: "blog",
    element: <Blog/>,
  },

  {
    path: "contact",
    element: <Contact/>,
  },

  {
    path: "submitted",
    element: <Submit/>,
  },

  {
    path: "upload",
    element: <Upload/>,
  },
  
  {
    path: "uploadpage",
    element: <Uploadpage/>,
  },

  {
    path: "signup",
    element: <Signup/>,
  },

  {
    path: "signuppage",
    element: <SignupPage/>,
  },

  {
    path: "technology",
    element: <Technology/>,
  },

  {
    path: "medicine",
    element: <Medicine/>,
  },

  {
    path: "transportation",
    element: <Transportation/>,
  },

  {
    path: "fashion",
    element: <Fashion/>,
  },
 {
    path: "fashion",
    element: <Fashion/>,
  },
//  {
//     path: "eco",
//     element: <Eco/>,
//   },

  {
    path: "food",
    element: <Food/>,
  },
  {
    path: "science",
    element: <Science/>,
  },
  {
    path: "comm",
    element: <Comm/>,
  },
  {
    path: "health",
    element: <Health/>,
  },
  {
    path: "sports",
    element: <Sports/>,
  },
  {
    path: "politics",
    element: <Politics/>,
  },
  {
    path: "env",
    element: <Env/>,
  },
  {
    path: "culture",
    element: <Culture/>,
  },
  
  {
    path: "eco",
    element: <Eco/>,
  },
  {
    path: "userinventions",
    element: <UserInventions/>,
  },
 
  {
    path: "userdata",
    element: <UploaderUserData/>,
  },
 
  

 

  

  

  

  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
);