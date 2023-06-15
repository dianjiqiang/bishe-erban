import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import mapRouter from '../utils/map-router'

const Login = lazy(() => import('../views/login'))
const Home = lazy(() => import('../views/home'))
const Forgetps = lazy(() => import('../views/forgetps'))
const Register = lazy(() => import('../views/register'))
const NotFound = lazy(() => import('../views/notfound'))

const routes = [
  {
    path: '/',
    element: <Navigate to={'/login'}></Navigate>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />,
    children: []
  },
  {
    path: '/forgetps',
    element: <Forgetps></Forgetps>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <NotFound />
  }
]

// 拉取路由模板
mapRouter(routes)

export default routes
