import React, { useState } from 'react'
import { logo, menu, close } from '../assets';
import { navLinks } from '../Contstants';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  return (
    <nav className='navbar py-6 flex justify-between items-center'>
      <img className="w-[120px]" src={logo} alt="hoobank logo" />

      <ul className='text-white space-x-10 sm:flex hidden'>
        {navLinks.map((element, index) => (
          <li
            key={element.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === element.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setActive(element.title)}
          >
            <a href={`#${element.id}`}>{element.title}</a>
          </li>
        ))}
      </ul>

      <div className={`${isMenuToggle ? 'block' : 'hidden'} overlay w-full h-full fixed left-0 top-0 bg-none z-10`} onClick={() => setIsMenuToggle(false)}></div>
      <div className="sm:hidden flex flex-1 justify-end items-center z-20">
        <img
          src={isMenuToggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsMenuToggle(!isMenuToggle)}
        />

        <div
          className={`${
            !isMenuToggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-gray-600 to-black absolute top-20 right-0 animate-fade-Up mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((element, index) => (
              <li
                key={element.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === element.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(element.title)}
              >
                <a href={`#${element.id}`}>{element.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar