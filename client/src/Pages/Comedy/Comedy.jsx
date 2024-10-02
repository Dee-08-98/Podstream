import React from 'react';
import Layout from '../../Layout/Layout';
import ComedyBio from '../../Components/ComedyBio';

function Comedy(props) {
    return (
        <>
            <ComedyBio/>
        </>
    );
}

export default Layout()(Comedy);