import { useLocation, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Guitar from './pages/Guitar'
import Theory from './pages/Theory'
import EarTraining from './pages/EarTraining'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const navItems = [
  { path: '/', label: 'בית' },
  { path: '/guitar', label: 'גיטרה' },
  { path: '/theory', label: 'תיאוריה' },
  { path: '/ear-training', label: 'אוזן' },
  { path: '/profile', label: 'פרופיל' },
]

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <main className="page-container">
        <div className="page-viewport" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/guitar" element={<Guitar />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/ear-training" element={<EarTraining />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default App
