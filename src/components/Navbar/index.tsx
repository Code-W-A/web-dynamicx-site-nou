"use client";

import { navbarData } from "@/static-data/navbar";
import { onScroll } from "@/utils/scrollActive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { trackCTA } from "@/components/Analytics/GTMLeadEvents";

export default function Navbar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const navigationHandler = () => {
    setNavigationOpen(!navigationOpen);
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  // ==== onePage nav active ====
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${stickyMenu ? "sticky-navbar" : ""} header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent transition`}
      >
        <div className="mx-auto w-full px-4 xl:container">
          <div className="relative mx-[-16px] flex items-center justify-between">
            <div className="w-52 max-w-full px-4 xl:w-60">
              <Link href="/" className="header-logo flex w-full items-center justify-center py-5 lg:py-6">
                <span className="relative block h-14 w-14">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="Logo Web Dynamicx"
                    fill
                    sizes="56px"
                    className="object-contain"
                    priority
                  />
                </span>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navigationHandler}
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`bg-dark relative my-[6px] block h-[2px] w-[30px] ${navigationOpen ? "top-[7px] rotate-45" : ""}`}
                  ></span>
                  <span
                    className={`bg-dark relative my-[6px] block h-[2px] w-[30px] ${navigationOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`bg-dark relative my-[6px] block h-[2px] w-[30px] ${navigationOpen ? "top-[-8px] rotate-[135deg]" : ""}`}
                  ></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`${!navigationOpen ? "hidden lg:block" : ""} absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white p-5 py-5 shadow-lg ${dropdownToggler ? "max-lg:max-h-[500px]" : "max-lg:max-h-[350px]"} max-lg:overflow-y-auto lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6`}
                >
                  <ul className="block lg:flex">
                    {navbarData.map((item) => (
                      <li
                        key={item?.id}
                        className={`group relative lg:px-5 ${item?.submenu ? "submenu-item" : ""}`}
                      >
                        {item?.href && !item?.submenu ? (
                          <Link
                            href={
                              item?.external
                                ? item.href
                                : item?.href?.startsWith("/") || item?.href?.startsWith("#")
                                ? item.href
                                : `/${item.href}`
                            }
                            onClick={navigationHandler}
                            className={`${pathUrl === `${item?.href}` ? "text-primary" : ""} group-hover:text-primary flex py-2 text-base text-black lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                          >
                            {item?.title}
                          </Link>
                        ) : (
                          <>
                            {item?.href && item?.submenu ? (
                              <div className="flex w-full items-center justify-between py-2 text-base text-black lg:mr-0 lg:inline-flex lg:px-0 lg:py-6">
                                <Link
                                  href={
                                    item?.external
                                      ? item.href
                                      : item?.href?.startsWith("/") || item?.href?.startsWith("#")
                                      ? item.href
                                      : `/${item.href}`
                                  }
                                  onClick={navigationHandler}
                                  className={`${pathUrl === `${item?.href}` ? "text-primary" : ""} group-hover:text-primary flex-1 ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                                >
                                  {item?.title}
                                </Link>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setDropdownToggler(!dropdownToggler);
                                  }}
                                  className="pl-3 lg:hidden"
                                >
                                  <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    className={`fill-current duration-200 ${dropdownToggler ? "max-lg:-scale-y-100" : ""}`}
                                  >
                                    <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  setDropdownToggler(!dropdownToggler)
                                }
                                className="group-hover:text-primary flex w-full items-center justify-between py-2 text-base text-black lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                              >
                                {item?.title}

                                <span className="pl-3">
                                  <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    className={`fill-current duration-200 lg:group-hover:-scale-y-100 ${dropdownToggler ? "max-lg:-scale-y-100" : ""}`}
                                  >
                                    <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                  </svg>
                                </span>
                              </button>
                            )}
                            {item?.submenu && (
                              <ul
                                className={`${dropdownToggler ? "" : "hidden lg:block"} submenu relative top-full left-0 rounded-xs bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                              >
                                {item?.submenu.map((subItem) => (
                                  <li key={subItem?.id}>
                                    <Link
                                      href={subItem?.href}
                                      onClick={navigationHandler}
                                      className={`block rounded-sm px-4 py-[10px] text-sm ${pathUrl === subItem?.href ? "text-primary" : "hover:text-primary text-black"}`}
                                    >
                                      {subItem?.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden items-center justify-end gap-4 pr-16 sm:flex lg:pr-0">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 hover:shadow-signUp rounded-full px-8 py-3 text-base font-bold whitespace-nowrap text-white transition duration-300 ease-in-out md:px-9 lg:px-8 xl:px-9"
                  onClick={() => { try { trackCTA("Navbar - Cere oferta"); } catch {} }}
                >
                  Cere ofertă
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
