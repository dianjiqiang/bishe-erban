import { lazy } from 'react'

const Recycling = lazy(() => import('@/views/home/c-views/questionnaire/recycling'))

const router = {
  path: '/home/questionnaire/recycling',
  element: <Recycling />
}

export default router
