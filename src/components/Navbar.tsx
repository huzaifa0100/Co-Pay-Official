"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const navigation = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "I am Patient",
      link: "/patient",
    },
    {
      label: "I am Clinic",
      link: "/clinic",
    },
    {
      label: "More",
      link: "/more",
      subItems: [
        { label: "Plans", link: "/plans" },
        { label: "Blogs", link: "/blogs" },
        { label: "Contact", link: "/contact" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center p-4 md:p-6 lg:p-8 mx-auto xl:px-1">
        {/* Logo and Navigation Container */}
        <div className="flex items-center flex-1">
          {/* Logo */}
          <Link href="/" className="mr-6 sm:mr-8 lg:mr-16">
            <span className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-indigo-500 dark:text-gray-100">
              <span>CO PAY HEALTH</span>
            </span>
          </Link>

          {/* Menu - Desktop */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex items-center list-none">
              {navigation.map(({ label, link, subItems }, index) => (
                <li className="mr-3 nav__item relative group" key={index}>
                  <Link 
                    href={link} 
                    className="inline-flex items-center px-4 py-2 text-lg xl:text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 relative"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </span>
                    {subItems && (
                      <span className="ml-2 transform transition-transform duration-200 group-hover:rotate-180">
                        <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                      </span>
                    )}
                  </Link>
                  {subItems && (
                    <div className="absolute left-0 hidden w-48 mt-1 bg-white shadow-lg rounded-md z-10 group-hover:block transition-opacity duration-300 dark:bg-gray-800">
                      {subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400 relative group/item"
                        >
                          <span className="relative">
                            {subItem.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover/item:w-full transition-all duration-300 ease-in-out"></span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get started and Theme Changer */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeChanger />
          <div className="hidden lg:block">
            <Link href="/" className="px-4 sm:px-6 py-2 text-white bg-indigo-600 rounded-md font-bold hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              {/* Mobile Menu */}
              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map(({ label, link, subItems }, index) => (
                  <div key={index} className="relative group w-full">
                    <Link 
                      href={link} 
                      className="inline-flex items-center justify-between w-full text-lg px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none font-bold relative"
                    >
                      <span className="relative">
                        {label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                      </span>
                      {subItems && (
                        <span className="ml-2">
                          <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                        </span>
                      )}
                    </Link>
                    {subItems && (
                      <div className="w-full bg-gray-50 dark:bg-gray-800 rounded-md">
                        {subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-8 py-2 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-400 relative group/item"
                          >
                            <span className="relative">
                              {subItem.label}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover/item:w-full transition-all duration-300 ease-in-out"></span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md font-bold hover:bg-indigo-700 transition-colors">         
                  Get Started
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
}