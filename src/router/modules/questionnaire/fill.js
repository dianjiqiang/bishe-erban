import { lazy } from 'react'

const Fill = lazy(() => import('@/views/home/c-views/questionnaire/fill'))

const router = {
  path: '/home/questionnaire/fill',
  element: <Fill />
}

export default router
