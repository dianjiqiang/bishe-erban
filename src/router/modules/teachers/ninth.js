import { lazy } from 'react'

const Ninth = lazy(() => import('@/views/home/c-views/teachers/ninth'))

const router = {
  path: '/home/techers/ninth',
  element: <Ninth />
}

export default router
