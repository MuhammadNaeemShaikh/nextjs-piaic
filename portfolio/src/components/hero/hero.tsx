'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

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
    <div className="flex flex-col  justify-center items-center  md:h-[80vh] text-white">
      <p className=" md:text-3xl uppercase font-bold my-2 text-sm tracking-wider">
        Hello I &apos;M Muhammad Naeem
      </p>
      <p className="md:text-lg uppercase font-semibold my-2 text-sm tracking-wider">
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
      </p>
      <p className="uppercase font-light my-2 text-sm text-justify w-[60%] tracking-wider leading-4">
        As a passionate developer, I specialize in various domains. I am
        proficient in Node.js and Next.js, crafting robust and scalable web
        applications. My expertise extends to web scraping, where I utilize
        tools like Puppeteer to gather and analyze data efficiently. With a deep
        understanding of AWS services, I offer seamless integration, deployment,
        and management on platforms like EC2 and S3 buckets. Leveraging the
        power of Next.js, I create dynamic and performant user interfaces,
        ensuring an optimal user experience. Let me transform your ideas into
        reality with my comprehensive development and AWS services.
      </p>
      <p className="flex mt-8">
        <span
          className="text-black bg-white mr-2 w-8 h-8  rounded-full flex justify-center items-center
        hover:text-white hover:bg-black "
        >
          <a
            href="https://web.facebook.com/profile.php?id=100014773357921"
            target="_blank"
          >
            <FaFacebookF className="" />
          </a>
        </span>
        <span className="text-black bg-white mr-2 w-8 h-8 rounded-full flex justify-center items-center hover:text-white hover:bg-black">
          <a
            href="https://www.linkedin.com/in/muhammad-naeem-1b7857120/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </span>
      </p>
      <div className="md:space-x-4 flex flex-wrap space-y-2 md:space-y-0 mt-8 justify-center md:justify-start">
        <button className="button" onClick={() => smoothScrollTo()}>
          About Me
          <BsFillPersonVcardFill className="text-lg" />
        </button>
        <button className="button">
          Contact Me <MdOutlineMailOutline className="text-lg" />
        </button>
      </div>
    </div>
    // <div className=" md:px-16 md:h-full  mt-24  items-center overflow-hidden">
    //   <div className=" md:h-96 flex flex-col justify-center">
    //     <div className="md:text-xl text-sm">
    //       I &apos;M{' '}
    //       <span
    //         className="uppercase font-extrabold"
    //         style={{ display: 'inline-block' }}
    //       >
    //         <Typewriter
    //           options={{
    //             strings: [
    //               'A Node Js Developer',
    //               'A Next js developer',
    //               'A web scrapper',
    //             ],
    //             autoStart: true,
    //             loop: true,
    //           }}
    //         />
    //       </span>
    //     </div>
    //     <div className="text-justify md:w-96 my-2 font-normal">
    //       As a passionate developer, I specialize in various domains. I am
    //       proficient in Node.js and Next.js, crafting robust and scalable web
    //       applications. My expertise extends to web scraping, where I utilize
    //       tools like Puppeteer to gather and analyze data efficiently. With a
    //       deep understanding of AWS services, I offer seamless integration,
    //       deployment, and management on platforms like EC2 and S3 buckets.
    //       Leveraging the power of Next.js, I create dynamic and performant user
    //       interfaces, ensuring an optimal user experience. Let me transform your
    //       ideas into reality with my comprehensive development and AWS services.
    //     </div>
    // <div className="md:space-x-4 flex flex-wrap space-y-2 md:space-y-0 justify-center md:justify-start">
    //   <button className="button" onClick={() => smoothScrollTo()}>
    //     About Me
    //     <BsFillPersonVcardFill className="text-lg" />
    //   </button>
    //   <button className="button">
    //     Contact Me <MdOutlineMailOutline className="text-lg" />
    //   </button>
    // </div>
    //   </div>
    // </div>
  );
};

export default Hero;
