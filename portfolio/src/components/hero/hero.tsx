'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

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
    <div className="grid md:grid-cols-2 grid-cols-1 md:px-16 md:h-full  mt-24  items-center overflow-hidden">
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
          As a passionate developer, I specialize in various domains. I am
          proficient in Node.js and Next.js, crafting robust and scalable web
          applications. My expertise extends to web scraping, where I utilize
          tools like Puppeteer to gather and analyze data efficiently. With a
          deep understanding of AWS services, I offer seamless integration,
          deployment, and management on platforms like EC2 and S3 buckets.
          Leveraging the power of Next.js, I create dynamic and performant user
          interfaces, ensuring an optimal user experience. Let me transform your
          ideas into reality with my comprehensive development and AWS services.
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
      <div className="h-[90%] rounded-md">
        <Image
          src="/profile.jpg"
          alt="profilePricture"
          width={400}
          height={100}
          className="rounded-md h-[90%] "
        />
      </div>
    </div>
  );
};

export default Hero;
