import { lazy } from 'react'

const Eighth = lazy(() => import('@/views/home/c-views/students/eighth'))

const router = {
  path: '/home/students/eighth',
  element: <Eighth />
}

export default router
