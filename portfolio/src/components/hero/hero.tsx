'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const smoothScrollTo = () => {
    const targetElement = document.getElementById('about');

    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:px-16">
      <div className=" md:h-96 flex flex-col justify-center">
        <div className="md:text-xl text-sm">
          I &apos;M{' '}
          <span
            className="uppercase font-extrabold"
            style={{ display: 'inline-block' }}
          >
            <Typewriter
              options={{
                strings: [
                  'A Node Js Developer',
                  'A Next js developer',
                  'A web scrapper',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="text-justify md:w-96 my-2 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          mollitia possimus voluptatibus neque omnis esse architecto ipsam
          aspernatur a itaque suscipit laboriosam explicabo obcaecati ipsum
          aliquid minima animi, reprehenderit perspiciatis.
        </div>
        <div className="md:space-x-4 flex flex-wrap space-y-2 md:space-y-0 justify-center md:justify-start">
          <button className="button" onClick={() => smoothScrollTo()}>
            About Me
            <BsFillPersonVcardFill className="text-lg" />
          </button>
          <button className="button">
            Contact Me <MdOutlineMailOutline className="text-lg" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
