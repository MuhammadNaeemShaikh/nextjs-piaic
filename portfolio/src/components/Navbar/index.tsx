import { NavbarItem, NavbarItemType } from '@/utils/navbarItem';
import React from 'react';

const Navbar = (props: { pageName: string }) => {
  const smoothScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  };
  return (
    <div className="flex justify-between sticky top-3  py-5 z-[2] text-white">
      <div className="uppercase">
        <span className="font-extrabold tracking-widest">Muhammad</span>
        <span className="font-light">Naeem</span>
      </div>
      <div className="">
        <div className="">
          <ul className="hidden md:flex uppercase font-light space-x-2 tracking-wide ">
            {NavbarItem.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="hover:cursor-pointer hover:underline"
                onClick={() => smoothScrollTo(item.href.substring(1))}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
