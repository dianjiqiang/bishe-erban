import { lazy } from 'react'

const Ninth = lazy(() => import('@/views/home/c-views/students/ninth'))

const router = {
  path: '/home/students/ninth',
  element: <Ninth />
}

export default router
