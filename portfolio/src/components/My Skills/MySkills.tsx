import React from 'react';
import ReactProgressbar from './subcomponent/ReactProgressbar';

const MySkills = () => {
  return (
    <div className="" id="myskills">
      <p className="uppercase font-extrabold text-center text-3xl tracking-widest mt-[315px] md:mt-0">
        my skills
      </p>
      <p className="uppercase font-light text-center text-sm tracking-wide my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
        quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
        necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
        autem minima vero nobis saepe.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:px-16">
        <div>
          <ReactProgressbar percent={70} skillName="Javascript" />
          <ReactProgressbar percent={60} skillName="typescript" />
          <ReactProgressbar percent={40} skillName="next js" />
          <ReactProgressbar percent={30} skillName="React" />
        </div>
        <div>
          <ReactProgressbar percent={70} skillName="Node JS" />
          <ReactProgressbar percent={60} skillName="MONGO DB" />
          <ReactProgressbar percent={40} skillName="sequelize" />
          <ReactProgressbar percent={50} skillName="MySql" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
