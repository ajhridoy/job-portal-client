import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../../Jobs/Job';
import Modal from '../../Modal/Modal';

const CategoriesProducts = () => {
    const category = useLoaderData();
    console.log(category)
    const [jobs, setJobs] = useState([])
    const [singleJob, setSingleJob] = useState(null)
    useEffect(() => {
        fetch(`https://job-portal-server-six.vercel.app/categoryjobs?categoryName=${category.name}`)
        .then(res => res.json())
        .then (data => setJobs(data))
    },[category])
    return (
        <div>
            <h2 className='font-bold text-4xl text-center my-10'>All {category.name}</h2>
            <div>
                {
                    <div className='grid grid-cols-1 mx-10 lg:mx-40 my-10 gap-10'>
                    {
                        jobs.map(job => <Job
                            key={job._id}
                            job = {job}
                            setSingleJob = {setSingleJob}
                        ></Job>)
                    }
                </div>
                }
            </div>
            {singleJob && <Modal singleJob = {singleJob} setSingleJob={setSingleJob}></Modal>}
        </div>
    );
};

export default CategoriesProducts;