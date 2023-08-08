import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:''

  },{
    path:"/Conocenos",
    element:<About/>,
    Element:''
  }

])

const routes = () => {
  return (
    <div>
      <RouterProvider router ={router}/>
    </div>
  )
}

export default routes
