import Link from 'next/link';
import Image from 'next/image';
import ThemeChanger from './DarkSwitch';
import { Disclosure } from '@headlessui/react';

export default function Navbar() {
  const navigation = ['Home', 'How it works', 'What we pay'];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-yellow-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/logo.png"
                        alt="N"
                        width={32}
                        height={32}
                        className="w-8"
                      />
                    </span>
                    <span>Revaluablegold.money</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <Link href={'/'}>
                      <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 dark:focus:bg-gray-800 focus:outline-none ">
                        Home
                      </a>
                    </Link>
                    <Link href="/#howitworks">
                      <a
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 dark:focus:bg-gray-800 focus:outline-none "
                        href="/#howitworks"
                      >
                        How it works
                      </a>
                    </Link>
                    <Link href="/#whatwepay">
                      <a
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 dark:focus:bg-gray-800 focus:outline-none "
                        href="/#whatwepay"
                      >
                        What we pay
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 dark:focus:bg-gray-800 focus:outline-none ">
                        Blog
                      </a>
                    </Link>

                    <Link href="/">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-yellow-600 rounded-md lg:ml-5">
                        Sell Now {'>>'}
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <Link href={'/'}>
              <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 focus:outline-none dark:focus:bg-gray-800">
                Home
              </a>
            </Link>
              <a href="#howitworks"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 focus:outline-none dark:focus:bg-gray-800"
              >
                How it works
              </a>
            <Link href="#whatwepay">
              <a
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 focus:outline-none dark:focus:bg-gray-800"
              >
                What we pay
              </a>
            </Link>
            <Link href="/blog">
              <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-yellow-500 focus:text-yellow-500 focus:bg-yellow-100 focus:outline-none dark:focus:bg-gray-800">
                Blog
              </a>
            </Link>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <a href="/#myForm" className="px-6 py-2 text-white bg-yellow-600 rounded-md md:ml-5">
              Sell Now
            </a>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
