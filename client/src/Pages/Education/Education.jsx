import React from 'react';
import Layout from '../../Layout/Layout';
import EducationBio from '../../Components/EducationBio';

function Education(props) {
    return (
        <>
           {/* <EducationBio/> */}

           <div className='h-[90vh]'>
                <h3 className='text-white font-extrabold text-center my-[40vh] text-3xl'>   Data not available </h3>
            </div>
        </>
    );
}

export default Layout()(Education);