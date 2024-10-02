

import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import loginValidation from '../Schema/loginValidation'; // Ensure this schema is correctly defined
import { Holder } from '../ContextProvider/ContextApp';

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);  // State to handle loading

    const { loginData, setLoginData } = useContext(Holder)

    const [showLogin, setShowLogin] = useState(false)


    const initialValues = {
        email: "",
        password: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: loginValidation,
        onSubmit: async (values, actions) => {
            try {
                setLoading(true);  // Start loading

                const response = await axios.post('http://localhost:4567/api/user/login', values);
                if (response?.data) {
                    toast.success(response.data.message);
                    if (response.data.message === "Login successful") {
                        localStorage.setItem("token", response.data.token);

                        setLoginData(response.data.user)


                        actions.resetForm();
                        navigate('/biography');
                        setLoading(false);  // Stop loading
                        // setShowLogin(!showLogin)  // show and hide login component
                    }
                }
            } catch (error) {
                toast.error("Login failed. Please try again.");
                console.error("Login error:", error);
                setLoading(false);
            }

        }
    });

    return (

        <>

            {
                loginData !== null ?
                    <div className="h-[90vh] w-full  flex justify-center items-center">
                        <h3 className='text-white font-extrabold mb-5 text-3xl text-center'> You are Logged In </h3>
                    </div>

                    : <div className="h-[90vh] w-full  flex justify-center items-center">
                        <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className='text-white font-extrabold mb-5 text-3xl text-center'>Login</h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <input
                                        type='email'
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        placeholder='Email'
                                        className='w-full p-2 font-bold indent-2 outline-none bg-gray-700 text-white border-2 border-white rounded-xl'
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <p className='text-red-500 font-bold'>{formik.errors.email}</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder='Password'
                                        className='w-full font-bold p-2 indent-2 bg-gray-700 outline-none text-white border-2 border-white rounded-xl'
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p className='text-red-500 font-bold'>{formik.errors.password}</p>
                                    )}
                                </div>

                                <button
                                    type='submit'
                                    disabled={loading}  // Disable button if loading
                                    className={`text-white font-bold bg-cyan-500 w-full p-2 rounded-xl mb-4 text-xl ${loading && 'opacity-50 '}`}
                                >
                                    {loading ? 'Login...' : 'Login'}
                                </button>
                            </form>
                            <p className='text-center text-white mt-4'>
                                Don't have an account? <Link to='/signup' className='text-green-500 font-bold underline'>Sign Up Here</Link>
                            </p>
                        </div>
                    </div>
            }

        </>
    );
}

export default Login;
