import { useState, type ReactNode } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { to: '/flashcards', label: 'ካርዶች' },
  { to: '/review', label: 'ክለሳ' },
  { to: '/quiz', label: 'ፈተና' },
  { to: '/lessons', label: 'ትምህርቶች' },
]

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onClick}
          className={({ isActive }) =>
            `transition-colors hover:text-amber-800 dark:hover:text-amber-400 ${isActive ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b-2 border-stone-200/60 bg-paper/90 dark:border-gray-800 dark:bg-night/90 sticky top-0 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <svg
              className="w-10 h-10 text-stone-700 dark:text-gray-300 transition-transform group-hover:rotate-6"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M30 15h45v70h-45z" />
              <path d="M30 25h45M30 40h45M30 55h45M30 70h45" />
              <path d="M22 20c4 0 4 6 0 6M22 40c4 0 4 6 0 6M22 60c4 0 4 6 0 6" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 dark:text-gray-100 leading-none">
                ጀ-አ ቋንቋ ማዕከል
              </span>
              <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest mt-0.5">
                ጀርመንኛ በነፃ
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex items-center space-x-6 text-lg font-medium text-stone-600 dark:text-gray-300">
              <NavLinks />
              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `transition-colors hover:text-amber-800 dark:hover:text-amber-400 ${isActive ? 'text-amber-800 dark:text-amber-400 font-bold' : ''}`
                    }
                  >
                    ዳሽቦርድ
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="bg-stone-800 text-amber-50 px-5 py-2 rounded-full text-sm font-semibold hover:bg-stone-700 transition shadow-sm dark:bg-amber-100 dark:text-stone-900 dark:hover:bg-amber-200 cursor-pointer"
                  >
                    ውጣ ({user.name.split(' ')[0]})
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-stone-800 text-amber-50 px-5 py-2 rounded-full text-sm font-semibold hover:bg-stone-700 transition shadow-sm dark:bg-amber-100 dark:text-stone-900 dark:hover:bg-amber-200"
                >
                  ግባ
                </NavLink>
              )}
            </nav>
  
            <ThemeToggle />
  
            <button
              className="md:hidden text-stone-700 dark:text-gray-300 text-2xl cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-stone-200 dark:border-gray-800 px-6 py-4 flex flex-col space-y-3 text-lg font-medium text-stone-600 dark:text-gray-300 bg-paper dark:bg-night">
            <NavLinks onClick={() => setMenuOpen(false)} />
            {user ? (
              <>
                <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-amber-800 dark:hover:text-amber-400">
                  ዳሽቦርድ
                </NavLink>
                <button onClick={handleLogout} className="text-left hover:text-amber-800 dark:hover:text-amber-400 cursor-pointer">
                  ውጣ
                </button>
              </>
            ) : (
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className="hover:text-amber-800 dark:hover:text-amber-400">
                ግባ
              </NavLink>
            )}
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-stone-900 text-stone-400 text-sm py-12 border-t border-stone-800 dark:bg-gray-950 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="font-medium text-stone-300">
            ጀ-አ ቋንቋ ማዕከል — የጀርመንኛ ትምህርት ለአማርኛ ተናጋሪዎች።
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            &copy; 2026 መብቱ በሕግ የተጠበቀ ነው። React · TypeScript · Vite · Express · SQLite
          </p>
        </div>
      </footer>
    </div>
  )
}
