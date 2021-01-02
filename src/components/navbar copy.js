import { Link } from "gatsby"
import { Transition } from "@headlessui/react"
import React from "react"
import PropTypes from "prop-types"

export default function Navbar({ siteTitle, menuLinks }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setIsOpen(null)
  }

  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8 border-b-1 border-gray-100">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <button
                className="inline-flex items-center justify-center "
                href="/"
              >
                <span className="sr-only">Gatsby</span>
                <svg
                  viewBox="0 0 28 28"
                  className="h-8 w-auto sm:h-10 fill-current"
                >
                  <circle cx={14} cy={14} r={14} fill="#639" />
                  <path
                    fill="#fff"
                    d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                  />
                </svg>
                <span className="ml-2">{siteTitle}</span>
              </button>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  id="main-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: menu */}

                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {menuLinks.map(link => (
              <Link
                key={link.name}
                to={link.link}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <svg viewBox="0 0 28 28" className="h-8 w-auto fill-current">
                  <circle cx={14} cy={14} r={14} fill="#639" />
                  <path
                    fill="#fff"
                    d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                  />
                </svg>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={handleMenuClose}
                >
                  <span className="sr-only">Close main menu</span>
                  {/* Heroicon name: x */}
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                {menuLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.link}
                    role="menuitem"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}
Navbar.defaultProps = {
  siteTitle: ``,
}
