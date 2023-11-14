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
    <div className="text-white" id={props.id && props.id}>
      <p
        className="uppercase font-extrabold text-center text-lg md:text-3xl tracking-widest"
        id="about"
      >
        {props.title ? props.title : null}
      </p>
      <div className="relative md:px-16 overflow-hidden mt-16 space-y-5 ">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-5  md:gap-16">
          <div className="border-white  border-4 p-4 rounded-md shadow-lg">
            <p>{props.degreetitle ? props.degreetitle : null}</p>
            <p>{props.uniName ? props.uniName : null}</p>
            <p>{props.completionYear ? props.completionYear : null}</p>
            <p>{props.degreeContent ? props.degreeContent : null}</p>
          </div>
          <div></div>
        </div>
        <div className="md:block hidden border-r-4 border-white h-[40.1rem] absolute left-[47.5%] top-0 ">
          <SiSemanticscholar className="text-4xl" />
        </div>

        <div className="md:block hidden absolute left-[50.5%] top-50">
          <SiSemanticscholar className="text-4xl" />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:ml-8 md:px-16 md:gap-16">
          <div></div>
          <div className="border-white rounded-md border-4 p-4 shadow-lg">
            <p>{props.collegeDegreetitle ? props.collegeDegreetitle : null}</p>
            <p>{props.collegeName ? props.collegeName : null}</p>
            <p>
              {props.collegeCompletionYear ? props.collegeCompletionYear : null}
            </p>
            <p>{props.collegeContent ? props.collegeContent : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
