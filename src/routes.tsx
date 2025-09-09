import Home from './app/page'
import App from './App'
import Login from './app/auth/login/page'
import User from './app/user/page'
import UserVoice from './app/user/voice/page'
import GuestRoutes from './components/GuestRoutes'
import UserRoutes from './components/UserRoutes'
import AdminRoutes from './components/AdminRoutes'
import AdminHome from './app/admin/page'
import AddText from './app/admin/addText/page'
import AdminReport from './app/admin/report/page'

// const NotFound = lazy(() => import('@/pages/NotFound'))

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
