import React from 'react';
import { SiSemanticscholar } from 'react-icons/si';

interface IProps {
  id: string;
  title: string;
  body?: string;
  degreetitle?: string;
  uniName?: string;
  completionYear?: string;
  degreeContent?: string;
  collegeDegreetitle?: string;
  collegeName?: string;
  collegeCompletionYear?: string;
  collegeContent?: string;
}

const Qualification = (props: IProps) => {
  return (
    <div className="" id={props.id && props.id}>
      <p
        className="uppercase font-extrabold text-center text-lg md:text-3xl tracking-widest"
        id="about"
      >
        {props.title ? props.title : null}
      </p>
      <p className="uppercase font-light text-justify md:text-center text-sm tracking-wide mt-10">
        {props.body ? props.body : null}
      </p>
      <div className="relative md:px-16 overflow-hidden mt-16 space-y-5 ">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-5  md:gap-16">
          <div className="border-black border-4 p-2 shadow-lg">
            <p>{props.degreetitle ? props.degreetitle : null}</p>
            <p>{props.uniName ? props.uniName : null}</p>
            <p>{props.completionYear ? props.completionYear : null}</p>
            <p>{props.degreeContent ? props.degreeContent : null}</p>
          </div>
          <div></div>
        </div>
        <div className="md:block hidden border-r-4 border-black h-[28.1rem] absolute left-[47.5%] top-0 ">
          <SiSemanticscholar className="text-4xl" />
        </div>

        <div className="md:block hidden absolute left-[50.5%] top-50">
          <SiSemanticscholar className="text-4xl" />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:ml-8 md:px-16 md:gap-16">
          <div></div>
          <div className="border-black border-4 p-2 shadow-lg">
            <p>Intermediate</p>
            <p>New Ali Garh College</p>
            <p>2015 - 2017</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ipsam harum nesciunt ab accusamus exercitationem quis
              dolor, expedita ut maxime autem cumque ipsa praesentium soluta
              quas officia, tempore id natus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
