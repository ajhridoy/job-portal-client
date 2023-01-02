import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Modal = ({singleJob, setSingleJob}) => {
    const {title} = singleJob
    const {user} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        toast.success('Submit Your Application Successfully')
        setSingleJob(null)
    }
    return (
        <>
          <input type="checkbox" id="apply-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box relative">
  <label htmlFor="apply-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
<h3 className="font-bold text-lg mb-5">{title}</h3>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
    <input type="text" placeholder="Type here" disabled defaultValue={user.displayName} className="input input-bordered input-info w-full" />
    <input type="text" placeholder="" disabled defaultValue={user.email} className="input input-bordered input-info w-full" />
    <input type="text" placeholder="Resume Drive link" className="input input-bordered input-info w-full" />
    <input type="text" placeholder="Cover Letter Drive link" className="input input-bordered input-info w-full" />
    <input type="text" placeholder="Your Location" className="input input-bordered input-info w-full" />
    <input className='btn btn-info w-full' type="submit" value="Submit" />
    </form>
  </div>
</div>  
        </>
    );
};

export default Modal;