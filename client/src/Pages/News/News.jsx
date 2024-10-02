import React from 'react';
import Layout from '../../Layout/Layout';
import NewsBio from '../../Components/NewsBio';

function News(props) {
    return (
        <>
            <NewsBio/>
        </>
    );
}

export default Layout()(News);