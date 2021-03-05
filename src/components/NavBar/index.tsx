import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const NavBar = () => {
  const [opened, setOpened] = useState(false)

  return (
    <nav className="bg-star-wars py-6 sticky top-0 left-0">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => setOpened((open) => !open)}
            >
              <FaBars />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-10 w-auto"
                src="/img/logo.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-10 w-auto"
                src="/img/logo.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <MenuItens />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'sm:hidden transition-all h-auto duration-500 ease-in-out',
          { 'max-h-0 invisible opacity-0': !opened },
          { 'max-h-64 visible opacity-1': opened }
        )}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MenuItens />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

function MenuItens() {
  const router = useRouter()
  const pathName = router.pathname.slice(1)
  return (
    <>
      <Link href="/">
        <a
          className={classNames(
            'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium block sm:flex text-xl',
            { 'bg-gray-900 text-white': pathName === '' },
            { 'text-gray-300': pathName !== '' }
          )}
        >
          Home
        </a>
      </Link>
      <Link href="/albuns">
        <a
          className={classNames(
            'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium block sm:flex text-xl',
            { 'bg-gray-900 text-white': pathName === 'albuns' },
            { 'text-gray-300': pathName !== 'albuns' }
          )}
        >
          Albuns
        </a>
      </Link>
      <Link href="/postagens">
        <a
          className={classNames(
            'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium block sm:flex text-xl',
            { 'bg-gray-900': pathName === 'postagens' },
            { 'text-gray-300': pathName !== 'postagens' }
          )}
        >
          Postagens
        </a>
      </Link>
      <Link href="/todos">
        <a
          className={classNames(
            'hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium block sm:flex text-xl',
            { 'bg-gray-900': pathName === 'todos' },
            { 'text-gray-300': pathName !== 'todos' }
          )}
        >
          To do
        </a>
      </Link>
    </>
  )
}
