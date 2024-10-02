import React from 'react';
import BuisnessBio from '../../Components/BuisnessBio';
import Layout from '../../Layout/Layout';

function Buisness(props) {
    return (
       <>
       <BuisnessBio/>
       </>
    );
}

export default Layout()(Buisness);