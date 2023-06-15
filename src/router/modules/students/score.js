import { lazy } from 'react'

const Score = lazy(() => import('@/views/home/c-views/students/score'))

const router = {
  path: '/home/students/score',
  element: <Score />
}

export default router
