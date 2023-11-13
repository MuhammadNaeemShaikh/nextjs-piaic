import Image from 'next/image';
import React from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const AboutMe = () => {
  return (
    <div className="sm:mt-[40px]">
      <p
        className="uppercase font-extrabold text-center text-3xl tracking-widest"
        id="about"
      >
        About me
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 h-96 items-center">
        <div>
          <div className="max-h-[50%] rounded-md">
            <Image
              src="/profile.jpg"
              alt="profilePricture"
              width={400}
              height={100}
              className="rounded-md max-h-[50%] "
            />
          </div>
        </div>
        <div>
          <p className="uppercase text-lg font-bold my-3">My Biography</p>
          Hello, I&apos;m Muhammad Naeem Shaikh. I earned my bachelor&apos;s
          degree in Information Technology from the University of Sindh.
          Furthering my education, I completed a certification in the MERN Stack
          Bootcamp from Contour. Currently, I am deepening my expertise by
          pursuing certification in Web 3.0 and Metaverse technologies through
          PIAIC. This immersive program covers TypeScript, Python, Next.js,
          generative AI, blockchain, and other cutting-edge technologies.
          Presently, I specialize as a Node.js developer, and my future goal is
          to evolve into a Web 3.0 and Metaverse developer, contributing to the
          forefront of emerging technologies.
          <p>
            <button className="w-40 h-10 uppercase rounded-md  border-black border-2 flex items-center justify-around mt-5">
              download cv
              <svg className="animate-bounce w-6 h-6 duration-500 -z-[1]">
                <HiOutlineDocumentDownload className="text-2xl" />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
