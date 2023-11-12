'use client';
import React from 'react';
import Progress from 'react-progressbar';

const ReactProgressbar = (props: { percent: number; skillName: string }) => {
  return (
    <div className='my-2'>
      <h3 className='uppercase font-bold text-lg'>{props.skillName}</h3>
      <Progress completed={props.percent} color={'black'} />
    </div>
  );
};

export default ReactProgressbar;
