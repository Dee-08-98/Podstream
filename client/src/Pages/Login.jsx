import React from 'react';
import Layout from '../Layout/Layout';
import LoginComponent from '../Components/Login'

function Login(props) {
    return (
        <>
        <LoginComponent/>
        </>
    );
}

export default Layout()(Login);