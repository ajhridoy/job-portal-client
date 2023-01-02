import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content w-full flex-col lg:flex-row-reverse">
    <div className='w-1/2' data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1000">
    <img src="https://media.istockphoto.com/id/1181353878/vector/successful-businessman-open-door-for-another-businessman.jpg?s=612x612&w=0&k=20&c=-IsIbPzISupmMyU5WQZP64e51FrJly3EQ-txS6kmADQ=" alt='' className="max-w-full lg:max-w-lg rounded-lg" />
    </div>
    <div className='' data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <h1 className="text-3xl text-center md:text-left lg:text-5xl font-bold">Lets!! Find Your Jobs</h1>
      <p className="py-6 text-center md:text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='flex justify-center lg:justify-start'>
      <Link to='/jobs' className="btn btn-primary">See All Jobs</Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;