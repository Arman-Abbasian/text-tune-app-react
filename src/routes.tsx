import { lazy, Suspense } from 'react'

// Pages
const Home = lazy(() => import('./app/page'))
const App = lazy(() => import('./App'))
const Login = lazy(() => import('./app/auth/login/page'))
const User = lazy(() => import('./app/user/page'))
const UserVoice = lazy(() => import('./app/user/voice/page'))
const AdminHome = lazy(() => import('./app/admin/page'))
const AddText = lazy(() => import('./app/admin/addText/page'))
const AdminReport = lazy(() => import('./app/admin/report/page'))

// Route Wrappers
const GuestRoutes = lazy(() => import('./components/GuestRoutes'))
const UserRoutes = lazy(() => import('./components/UserRoutes'))
const AdminRoutes = lazy(() => import('./components/AdminRoutes'))

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'auth',
        element: <GuestRoutes />,
        children: [{ path: 'login', element: <Login /> }],
      },

      {
        path: 'user',
        element: <UserRoutes />,
        children: [
          { index: true, element: <User /> },
          {
            path: 'voice',
            element: <UserVoice />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminRoutes />,
        children: [
          { index: true, element: <AdminHome /> },
          { path: 'addText', element: <AddText /> },
          { path: 'report', element: <AdminReport /> },
        ],
      },
    ],
  },
]
