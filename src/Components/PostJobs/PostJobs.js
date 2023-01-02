import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PostJobs = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const categoryName = form.categoryName.value;
        const companyName = form.companyName.value;
        const location = form.location.value;
        const skill = form.skill.value;
        const ctc = form.ctc.value;

        const job = {
            title,
            categoryName,
            companyName,
            location,
            skill,
            ctc
        }

        fetch('https://job-portal-server-six.vercel.app/jobs', {
            method: 'POST',
            headers: {
              "content-type": "application/json" 
            },
            body: JSON.stringify(job)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                toast.success("Post Your Job successfully");
                navigate("/jobs");
              }
        })
    }
    return (
        <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000">
           <h2 className='font-bold text-4xl text-center my-8'>Post Your Job</h2>
           <form className='my-10 mx-6 lg:w-3/5 lg:mx-auto' onSubmit={handleSubmit}>
           <label className="label">
            <span className="label-text">Job Title:</span>
            </label>
           <input type="text" name='title' placeholder="Job-Title" className="input input-bordered input-info w-full" required />
           <select name='categoryName' className="select select-info w-full my-5" required>
  <option disabled selected>Choose Your Relevant Category</option>
  <option>Frontend Developer Jobs</option>
  <option>React Developer Jobs</option>
  <option>JavaScript Developer Jobs</option>
  <option>MERN Stack Developer Jobs</option>
  <option>Backend Developer Jobs</option>
  <option>Node.js Developer Jobs</option>
</select>
           <label className="label">
            <span className="label-text">Company Name:</span>
            </label>
           <input type="text" name='companyName' placeholder="Company Name" className="input input-bordered input-info w-full" required/>
           <label className="label">
            <span className="label-text">Location:</span>
            </label>
           <input type="text" name='location' placeholder="Company Location" className="input input-bordered input-info w-full" required/>
           <label className="label">
            <span className="label-text">Skills:</span>
            </label>
           <input type="text" name='skill' placeholder="Skills you want" className="input input-bordered input-info w-full" required/>
           <label className="label">
            <span className="label-text">CTC:</span>
            </label>
           <input type="number" name='ctc' placeholder="CTC" className="input input-bordered input-info w-full" required/>
           <input className="btn btn-primary mt-5 w-full" type="submit" value="Post Job" />
           </form>
        </div>
    );
};

export default PostJobs;