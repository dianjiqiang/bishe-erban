import { lazy } from 'react'

const Seven = lazy(() => import('@/views/home/c-views/students/seventh'))

const router = {
  path: '/home/students/seventh',
  element: <Seven />
}

export default router
