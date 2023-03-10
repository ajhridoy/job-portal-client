import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false);
    const handleLogOut = () => {
        logOut()
        .then(() => {
          }).catch((error) => {
          });
    }
    return (
        <nav className="w-full bg-gray-900 shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <label
            htmlFor="dashboard-drawer"
            className="btn drawer-button lg:hidden"
            title='Click for Dashboard Menu'
          >
           <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-green-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
          </label>
                    <Link to='/'>
                        <h2 className="text-2xl font-bold flex flex-col md:flex-row items-center"><span className='text-green-400 text-4xl'></span><span className='ml-2 text-green-400 uppercase'>Tech-Jobs</span></h2>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            title='Click for Nav Menu'
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-green-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                             ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-green-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <Link to='/'><li className="text-green-300 hover:underline rounded-lg p-3 font-semibold">Home</li></Link>

                    <Link to='/jobs'><li className="text-green-300 hover:underline rounded-lg p-3 font-semibold">Jobs</li></Link>
                        
                    <Link to='/postJob'><li className="text-green-300 hover:underline rounded-lg p-3 font-semibold">Post a Job</li></Link>  
                        {
                            user ? 
                            <li className="">
                            <button onClick={handleLogOut} className="btn bg-green-400 hover:bg-green-500 text-black">Log Out</button>
                            </li>
                            :
                            <li className="">
                            <Link to='/login'><button className="btn bg-green-400 hover:bg-green-500 text-black">Log in</button></Link>
                        </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;