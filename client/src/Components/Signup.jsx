
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUpValidation from '../Schema/signupValidation';
import { useFormik } from "formik";
import axios from 'axios';
import toast from 'react-hot-toast';

const initialValues = {
    name: "",
    email: "",
    password: ""
};

function Signup(props) {
    const [loading, setLoading] = useState(false);  // State to handle loading
    const [serverError, setServerError] = useState("");  // State to handle server errors

    const navigate = useNavigate();

    const {
        errors,
        values,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues,
        validationSchema: signUpValidation,
        onSubmit: (values, actions) => {
            setLoading(true);  // Start loading
            setServerError("");  // Clear any previous errors

            axios.post('http://localhost:4567/api/user/register', values)
                .then((res) => {
                    if (res?.data) {
                        toast.success(res.data.message);
                        if (res.data.message === "user register sucessfull") {
                            actions.resetForm();
                            navigate('/login');
                        }
                    }
                })
                .catch((err) => {
                    console.log("User register error :- ", err);
                    setServerError("Registration failed. Please try again.");  // Set error message
                })
                .finally(() => {
                    setLoading(false);  // Stop loading
                });
        }
    });

    return (
        <>
            <div className="h-[90vh] w-full  flex justify-center items-center">
                <div className="w-full max-w-md  bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className='text-white font-extrabold mb-5 text-3xl indent-2 text-center'>SignUp</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            name='name'
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=' Name'
                            className='w-full font-bold mb-4 indent-2 p-2 bg-inherit outline-none border-2 border-white rounded-xl text-white'
                        />
                        {errors.name && touched.name && (
                            <p className='font-bold text-red-500 -mt-5 mb-3'>{errors.name}</p>
                        )}

                        <input
                            name='email'
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=' Email'
                            className='w-full font-bold mb-4 indent-2 p-2 bg-inherit outline-none border-2 border-white rounded-xl text-white'
                        />
                        {errors.email && touched.email && (
                            <p className='font-bold text-red-500 -mt-5 mb-3'>{errors.email}</p>
                        )}

                        <input
                            name='password'
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=' Password'
                            className='w-full font-bold indent-2 p-2 bg-inherit outline-none border-2 border-white rounded-xl text-white mb-4'
                        />
                        {errors.password && touched.password && (
                            <p className='font-bold text-red-500 -mt-5 mb-3'>{errors.password}</p>
                        )}

                        <button
                            type='submit'
                            disabled={loading}  // Disable button if loading
                            className={`text-white font-bold bg-cyan-500 w-full p-2 rounded-xl mb-4 text-xl ${loading && 'opacity-50 ' }`}
                        >
                            {loading ? 'Signing Up...' : 'SignUp'}
                        </button>

                        {serverError && (
                            <p className='font-bold text-red-500'>{serverError}</p>
                        )}
                    </form>
                    <p className='indent-2 text-white'>
                        Already Have an account
                        <Link to={'/login'}>
                            <span className='ml-1 font-bold underline text-green-500 cursor-pointer'> Login Here </span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Signup;
