import { createBrowserRouter, Navigate, NavLink, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

const DefaultRoute=()=>{
  const authData=JSON.parse(localStorage.getItem('authData'));
  if(authData){
    return <Navigate to='/login' replace/>
  }
  return <Navigate to='/register' replace/>
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
