import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, image, name} = category
    return (
        <div className="card card-compact bg-base-100 shadow-xl" data-aos="zoom-in-left"
        data-aos-easing="linear"
        data-aos-duration="1000">
  <figure className='h-3/5'><img className='w-full' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <Link to={`/category/${_id}`}><button className="btn btn-primary">See Jobs</button></Link>
    </div>
  </div>
</div>
    );
};

export default Category;