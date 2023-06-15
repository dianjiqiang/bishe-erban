import { lazy } from 'react'

const Favorites = lazy(() => import('@/views/home/c-views/questionnaire/favorites'))

const router = {
  path: '/home/questionnaire/favorites',
  element: <Favorites />
}

export default router
