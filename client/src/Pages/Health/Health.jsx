import React from 'react';
import Layout from '../../Layout/Layout';
import HealthBio from '../../Components/HealthBio';

function Health(props) {
    return (
        <>
            {/* <HealthBio/> */}

            <div className='h-[90vh]'>
                <h3 className='text-white font-extrabold text-center my-[40vh] text-3xl'>   Data not available </h3>
            </div>
        </>
    );
}

export default Layout()(Health);