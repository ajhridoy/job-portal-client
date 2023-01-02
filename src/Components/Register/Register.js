import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSignup = event => {
    event.preventDefault();
    setError('')
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      toast.success('User Register Successfully')
      updateUserProfile(name)
      .then(() => {

      }).catch((error) => {

      })
      navigate('/')
      form.reset()
    })
    .catch((error) => {
       setError(error.message)
    });
  }
    return (
        <div className="w-full my-10 mx-auto max-w-sm p-4 md:max-w-md rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center underline">
        Sign Up
      </h2>
      <form
        onSubmit={handleSignup}
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
        <input
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md cursor-pointer bg-violet-400 text-gray-900"
          value="Register"
        />
      </form>
      <p className='text-red-500'>{error}</p>
      <p className="text-sm text-center text-gray-400 mt-5">
        Already have an account?
        <Link
          to={'/login'}
          className="focus:underline hover:underline text-green-300"
        >
           Log In Your Account
        </Link>
      </p>
    </div>
    );
};

export default Register;