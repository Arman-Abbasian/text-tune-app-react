import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { makeStore } from './store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.tsx'

const store = makeStore()

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
