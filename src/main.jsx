import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Orders from './Component/Orders/Orders.jsx';
import Profile from './Component/Profile/Profile.jsx';
import PrivateRoute from './Component/Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true , Component:Home},
      {
        path:'login' , Component:Login
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'order',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        Component:Profile
      }

    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
