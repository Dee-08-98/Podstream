import React, { useContext } from 'react';
import { FaAlignRight, FaBars, FaDragon, FaHeart, FaUser } from 'react-icons/fa';
import { Holder } from '../ContextProvider/ContextApp';

function Menu() {
    const { loginData, setLoginData } = useContext(Holder)


    return (
        <>




            <nav className="navbar bg-red-600 sticky-top">
                <div className="container-fluid">

                    <span className="navbar-brand text-white font-extrabold py-2" > Welcome , {loginData ? loginData.name : "User"}  </span>

                    <button className="navbar-toggler shadow-none border-0 block lg:hidden  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <span className="font-extrabold text-white text-3xl "><FaAlignRight /></span>
                    </button>

                    <div className="hidden lg:block">
                        <div className="  h-10 w-10 text-center flex items-center justify-center rounded-full bg-white">

                            {loginData ? <span className='font-extrabold'>{loginData.email.split('')[0]}</span> : <FaUser className='font-extrabold text-lg' />}
                        </div>
                    </div>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Menu;




// <div classNameName="border-b-4 border-white flex items-center justify-between py-3 px-4 sm:px-0 sticky-top bg-red-800">


// {/* ================================= */}
// <div classNameName='text-2xl font-extrabold text-white'><FaBars /></div>


// {/* ================================== */}
// <h3 classNameName='text-2xl font-extrabold text-white hidden md:block'>Welcome , {loginData ? loginData.name : "User"} </h3>


// <div classNameName=" hidden md:block text-xl font-extrabold text-white rounded-full border-2 border-white p-[6px] bg-emerald-900"> {loginData ? loginData.email.split('')[0] : <FaUser />} </div>
// <div classNameName='text-center text-2xl text-green-500 font-extrabold block md:hidden'> My Life </div>

// </div>






