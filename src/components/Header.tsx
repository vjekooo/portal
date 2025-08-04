import React from 'react'
import { useState } from 'react'

export const Header = () => {
  const [presentMenu, setPresentMenu] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <div
        className="cursor-pointer md:hidden block"
        onClick={() => setPresentMenu(!presentMenu)}
      >
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </div>

      <div class="order-1 md:order-2">
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl "
          href="#"
        >
          BRIID
        </a>
      </div>

      {presentMenu && (
        <div className="absolute top-[50px] left-0 w-full bg-white shadow-lg p-4 md:hidden h-[95vh] transition-all duration-300 ease-in-out z-20">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a
                href="/arhitecture"
                className="text-gray-800 hover:text-gray-600"
              >
                Architecture
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
