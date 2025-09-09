import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="!p-4 h-screen overflow-auto bg-[radial-gradient(circle,_#fbbf24,_#0f172a)] text-secondary-300">
      <Outlet />
    </div>
  )
}

export default App
