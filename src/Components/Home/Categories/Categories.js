import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../CategoriesReduce/CategoriesSlice';
import Category from './Category';

const Categories = () => {
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetch('https://job-portal-server-six.vercel.app/categories')
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // },[])

    const {isLoading, categories, error} = useSelector(state => state.categories)

    const dispatch = useDispatch()
     
    useEffect(() => {
        dispatch(fetchCategories())
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Jobs Categories</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-10 gap-8 my-10'>
            {
                categories.map(category => <Category
                    key={category._id}
                    category = {category}
                ></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;