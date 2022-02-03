import React from 'react';
import TourPakage from '../TourPakage/TourPakage';

const tourPackeges = [
    {country:"", placeName:"", image:"", caption:{cap1:"Tour Timing", cap2:"View more details", cap3:"Price", cap:"Location"}}
]

const Home = () => {
    return (
        <div>
            <TourPakage></TourPakage>
        </div>
    );
};

export default Home;