import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Job = ({job, setSingleJob}) => {
    const {title, companyName, location, skill, ctc} = job
    return (
        <div className="card bg-base-100 shadow-xl"data-aos="flip-up"
        data-aos-easing="linear"
        data-aos-duration="1000">
  <div className="card-body">
    <h2 className="font-bold text-4xl">{title}</h2>
    <p><span className='font-medium'>Company Name: </span>{companyName}</p>
    <p className='text-lg'><span className='font-medium'>Skills: </span>{skill}</p>
    <div className='flex justify-around'>
    <p><span className='font-medium'>Location: </span>{location}</p>
    <p><span className='font-medium'>CTC: </span>{ctc} LPA</p>
    </div>
    <div className="card-actions justify-end">
    <label onClick={(() => setSingleJob(job))} htmlFor="apply-modal" className="btn btn-primary">Apply Now</label>
      {/* <button className="btn btn-primary">Apply Now</button> */}
    </div>
  </div>
</div>
    );
};

export default Job;