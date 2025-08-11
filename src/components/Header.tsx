import React, { useEffect } from 'react'
import { useState } from 'react'

interface Props {
  mobileLinks?: {
    title: string
    url: string
  }[]
}

export const Header = ({ mobileLinks }: Props) => {
  const [presentMenu, setPresentMenu] = useState(false)

  useEffect(() => {
    if (presentMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [presentMenu])

  return (
    <nav className="flex flex-wrap w-full items-center justify-between mt-0 py-6 px-6">
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

      <div className="order-1 md:order-2 borders-solid border-b-2 border-gray-300">
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl "
          href="/"
        >
          BRIID
        </a>
      </div>

      {presentMenu && (
        <div className="absolute top-0 left-0 w-[90vw] bg-white shadow-lg p-4 md:hidden h-[100vh] transition-all duration-300 ease-in-out z-50">
          <div className="flex justify-end">
            <svg
              className="fill-current text-gray-900 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              onClick={() => setPresentMenu(false)}
            >
              <title>close</title>
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </div>
          <ul className="flex flex-col space-y-6">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            {mobileLinks?.map((link) => (
              <li>
                <a
                  href={link.url}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
