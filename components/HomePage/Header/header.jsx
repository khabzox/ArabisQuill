"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderData } from "./HeaderData/HeaderData";
import { Lemonada } from "next/font/google";
import styles from "./header.module.css"
const lemonada = Lemonada({ subsets: ["arabic"] });

const Header = () => {
  const [open, setOpen] = useState(false);
  function boxOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <header>
      <div className="bg-primHov text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="space-x-4 hidden md:block">
            {HeaderData.map((e) => {
              return (
                <>
                  <Link
                    key={e.id}
                    href={e.LinkTo}
                    className="hover:text-gray-300 mx-4"
                  >
                    {e.LinkText}
                  </Link>
                </>
              );
            })}
          </nav>
          <div className="block md:hidden">
                <button
                  className="rounded bg-prim p-2 text-white"
                  onClick={boxOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {open && (
                  <div className={styles.mobileLinks}>
                    {HeaderData.map((e) => {
              return (
                <>
                  <Link
                    key={e.id}
                    href={e.LinkTo}
                    className="hover:text-gray-300 mx-4"
                  >
                    {e.LinkText}
                  </Link>
                </>
              );
            })}
                  </div>
                )}
              </div>
          <div className="text-xl font-bold">
            <div className={lemonada.className}>{"أربي سكويل"}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
