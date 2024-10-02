import React from 'react';
import Layout from '../../Layout/Layout';
import ScienceBio from '../../Components/ScienceBio';

function Science(props) {
    return (
        <>
            <ScienceBio />
        </>
    );
}

export default Layout()(Science);