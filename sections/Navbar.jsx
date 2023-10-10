import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const menuList = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Facilities", path: "/facilities" },
    { label: "Doctors", path: "/doctors" },
  ];

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full sticky top-0 h-20 z-[999] bg-primary">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-4 lg:px-0">
          <Link href="/">
            <h3>SRL CLINIC</h3>
          </Link>
          <div className="hidden lg:flex items-center space-x-5">
            {menuList.map((menu, index) => (
              <div key={index} className="text-xl">
                <Link href={menu.path}>
                  <p>{menu.label}</p>
                </Link>
              </div>
            ))}
            <button className="p-3 text-lg w-[108px] border border-background rounded-lg hover:bg-background hover:text-primary duration-200 ease-in-out">
              Login
            </button>
          </div>

          <div
            className="flex lg:hidden border border-background rounded-full p-2"
            onClick={handleChange}>
            {nav ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
        }>
        <h2 className="text-primary">SRL Clinic</h2>
        <div className="flex flex-col items-center justify-center w-full h-full gap-14">
          {menuList.map((menu, index) => (
            <ul
              key={index}
              className="text-xl text-primary"
              onClick={handleChange}>
              <Link
                href={menu.path}
                className="hover:text-secondary duration-200">
                <li>{menu.label}</li>
              </Link>
            </ul>
          ))}
          <button className="p-3 text-lg w-[108px] border border-primary rounded-lg text-primary hover:bg-background hover:text-primary duration-200 ease-in-out">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
