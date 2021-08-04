import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../HomepageSections/Section1';
import Section2 from '../HomepageSections/Section2';
import Section3 from '../HomepageSections/Section3';
import Section4 from '../HomepageSections/Section4';

const Home = () => {
    return (
        <main id="page_outer">
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 /> 
            <Section4 />    
        </main>
    )
}

export default Home

