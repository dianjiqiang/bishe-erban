import { lazy } from 'react'

const Add = lazy(() => import('@/views/home/c-views/add'))

const router = {
  path: '/home/add',
  element: <Add />
}

export default router
