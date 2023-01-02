import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [singleJob, setSingleJob] = useState(null)
    useEffect(() => {
        fetch('https://job-portal-server-six.vercel.app/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className='font-bold text-4xl text-center my-5'>Jobs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 my-10 gap-10'>
                {
                    jobs.map(job => <Job
                        key={job._id}
                        job = {job}
                        setSingleJob = {setSingleJob}
                    ></Job>)
                }
            </div>
            {singleJob && <Modal singleJob = {singleJob} setSingleJob={setSingleJob}></Modal>}
        </div>
    );
};

export default Jobs;