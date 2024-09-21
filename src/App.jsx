import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from "./Router";

const App = () => {
  
  return (
    <div>
        <RouterProvider router={Routes}/>
    </div>
  )
}

export default App

