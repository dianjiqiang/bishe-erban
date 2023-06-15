import { lazy } from 'react'

const Studentfill = lazy(() => import('@/views/home/c-views/students/studentfill'))

const router = {
  path: '/home/students/studentfill',
  element: <Studentfill />
}

export default router
