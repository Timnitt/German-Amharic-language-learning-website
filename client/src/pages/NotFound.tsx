import { Link } from 'react-router-dom'
import { usePageTitle } from '../usePageTitle'

export default function NotFound() {
  usePageTitle('ገጹ አልተገኘም')
  return (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <div className="text-6xl font-black text-blue-700 dark:text-blue-400 mb-2">404</div>
      <h1 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-3">ገጹ አልተገኘም</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        የፈለጉት ገጽ የለም ወይም ተንቀሳቅሷል።
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        ወደ መነሻ ይመለሱ
      </Link>
    </div>
  )
}
