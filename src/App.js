import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CategoriesProducts from './Components/Home/Categories/CategoriesProducts';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Login from './Components/Login/Login';
import PostJobs from './Components/PostJobs/PostJobs';
import Register from './Components/Register/Register';
import Main from './Layouts/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/jobs',
          element: <PrivateRoute><Jobs></Jobs></PrivateRoute>
        },
        {
          path: '/category/:id',
          element: <PrivateRoute><CategoriesProducts></CategoriesProducts></PrivateRoute>,
          loader: ({params}) => fetch(`https://job-portal-server-six.vercel.app/categories/${params.id}`)
        },
        {
          path: '/postJob',
          element: <PrivateRoute><PostJobs></PostJobs></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
