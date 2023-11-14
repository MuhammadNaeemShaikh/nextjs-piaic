import Image from 'next/image';
import React from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const AboutMe = () => {
  let handleDownload = () => {
    const cvFileUrl = `https://healthcare-assets.s3.amazonaws.com/1699972955994_Muhammad%27s%20Resume%20%284%29.pdf`;

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the link's href attribute to the CV file URL
    link.href = cvFileUrl;

    // Set the link's download attribute to the desired file name
    link.download = 'Muhammad_Resume.pdf'; // Set the desired file name here

    // Add rel attribute for security
    link.target = '_blank';


    // Trigger a click on the link to start the download
    link.click();
  };
  return (
    <div className="text-white h-auto ">
      <p
        className="uppercase font-extrabold text-center text-3xl tracking-widest"
        id="about"
      >
        About me
      </p>
      <div className="grid grid-cols-1 mt-10  overflow-hidden">
        <div className=" text-center">
          <p className="uppercase text-lg  font-bold my-3">My Biography</p>
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
          <p className="justify-center flex w-full ">
            <button
              className="w-40 h-10 uppercase text-white rounded-md  border-slate-100 border-2 flex items-center justify-center mt-5  hover:border-black hover:border-0"
              onClick={handleDownload}
            >
              download cv
              <svg className="animate-bounce w-6 h-6 duration-500 -z-[1] ">
                <HiOutlineDocumentDownload className="text-2xl hover:text-4xl " />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
