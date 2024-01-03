"use client"
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from "../link";

import { Menu as menuIcon, X } from 'react-feather'
import { IconLink } from '../icon-link'

import { animated } from "react-spring";
import { useMountTransition } from "../../hooks/useMountTransition";
import { usePathname } from 'next/navigation';

export function Menu({ items: menu = [], socialLinks = [] }) {
  const [menuIsVisible, setMenuState] = useState(false)
  const mountTransition = useMountTransition(menuIsVisible, setMenuState);

  const pathname = usePathname()

  useEffect(() => {
    return () => {
      setMenuState(false)
    }
  }, [pathname])

  return (
    <div>
      <IconLink className={"block md:hidden ml-4"} onClick={e => setMenuState(prevState => !prevState)} icon={menuIcon} />
      {mountTransition((styles, item, transitionObject, siblingPosition) => {
        return createPortal(
          item && (
            <animated.div
              className={`fixed left-0 top-0 w-full flex flex-col flex-grow justify-self-end text-sm z-50 h-full overflow-auto  dark:bg-gray-800 bg-white shadow-lg py-4 h-full dark:bg-opacity-80 bg-opacity-50 backdrop-blur-md backdrop-filter`}
              style={styles}
            >
              <div className="fixed top-0 left-0 h-full w-full" onClick={() => setMenuState(false)} />
              <div className="relative m-8 z-1">
                {menu.map(
                  ({ href, title, submenu = [], submenuOptions }, i) => (
                    <div className="block w-full p-1 px-4 md:px-8" key={i}>
                      <Link href={href} className="block text-2xl text-blue hover:text-brown font-bold mb-3">
                        {title}
                      </Link>
                      {submenu.length > 0 && (
                        <div className="grid grid-cols-2 mb-3">
                          {submenu.map(({ href, title }, i) => (
                            <Link href={href} key={i} className="col-span-2 sm:col-span-1 text-lg py-2 sm:mb-0">
                              {title}
                            </Link>
                          ))}
                          {submenuOptions.showDiscount && (
                            <a
                              href={
                                submenuOptions.discount.href +
                                (submenuOptions.discount.hrefState
                                  ? "?=remodelingSpecialApplied"
                                  : "")
                              }
                              className="-mx-3 col-span-2 p-3 mt-2 flow-root bg-gray-50 hover:bg-gray-100"
                            >
                              <div className="flex items-center">
                                <div className="text-base font-medium text-gray-900">
                                  {title} {submenuOptions.discount.heading}
                                </div>
                                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 bg-brown text-white">
                                  {submenuOptions.discount.headingTag}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {submenuOptions.discount.description}
                              </p>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
                <div className="flex gap-2 justify-between m-2 items-center">
                  <div className="flex col-span-3 md:col-span-1 gap-2 m-2">
                    {socialLinks}
                  </div>
                  <IconLink className={"ml-4"} onClick={e => setMenuState(prevState => !prevState)} icon={X} />
                </div>
              </div>
            </animated.div>
          ),
          document.querySelector("#menu_portal")
        )
      })}
    </div>
  )
}