"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import SocialMenu from "./SocialMenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 lg:bg-transparent bg-dark-blue text-gray-300">
      <div>
        <Link href="/">
          <Image src={"/assets/logo.png"} alt="Logo" width={100} height={80} />
        </Link>
      </div>

      {/* menu */}
      <Menu />

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-dark-blue flex flex-col justify-center items-center"
        }
      >
        <MobileMenu handleClick={handleClick} />
      </ul>

      {/* Social icons */}
      <SocialMenu />
    </nav>
  );
};

export default Navbar;
