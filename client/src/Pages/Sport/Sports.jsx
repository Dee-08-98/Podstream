import React from 'react';
import Layout from '../../Layout/Layout';
import SportBio from '../../Components/SportBio';

function Sports(props) {
    return (
        <>
        <SportBio/>
        </>
    );
}

export default Layout()(Sports);