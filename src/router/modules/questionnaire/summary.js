import { lazy } from 'react'

const Summary = lazy(() => import('@/views/home/c-views/questionnaire/summary'))

const router = {
  path: '/home/questionnaire/summary',
  element: <Summary />
}

export default router
