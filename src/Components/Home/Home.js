import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Statictics from './Statictics/Statictics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Statictics></Statictics>
            <Categories></Categories>
        </div>
    );
};

export default Home;