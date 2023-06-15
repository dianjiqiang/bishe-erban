import { lazy } from 'react'

const Eighth = lazy(() => import('@/views/home/c-views/teachers/eighth'))

const router = {
  path: '/home/techers/eighth',
  element: <Eighth />
}

export default router
