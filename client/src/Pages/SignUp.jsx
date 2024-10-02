import React from 'react';
import Signup from '../Components/Signup';
import Layout from '../Layout/Layout';

function SignUp(props) {
    return (
        <>
            <Signup/>
        </>
    );
}

export default Layout()(SignUp);