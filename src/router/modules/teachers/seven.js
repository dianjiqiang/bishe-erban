import { lazy } from 'react'

const Seven = lazy(() => import('@/views/home/c-views/teachers/seventh'))

const router = {
  path: '/home/techers/seventh',
  element: <Seven />
}

export default router
