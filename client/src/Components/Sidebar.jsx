import React, { useContext } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleUp, FaHeart, FaHome, FaMicrophone, FaPodcast, FaSearch, FaUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { Holder } from '../ContextProvider/ContextApp';
import toast from 'react-hot-toast';


function Sidebar(props) {

    const { loginData, setLoginData } = useContext(Holder)


    const routes = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/biography",
            name: "Biography",
            icon: <FaSearch />
        },
        {
            path: "/popular",
            name: "Popular Bio",
            icon: <FaHeart />
        },
        {
            path: "/trending",
            name: "trending Bio",
            icon: <FaHeart />
        },
        {
            path: "/upload",
            name: "Upload",
            icon: <FaArrowAltCircleUp />
        },
        {
            path: "/login",
            name: "Login",
            icon: <FaUser />
        }

    ]

    const userToken = localStorage.getItem("token")


    const logout = async () => {
        try {

            const res = await fetch('http://localhost:4567/api/user/logout', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${userToken}`
                }
            });

            const data = await res.json();
            console.log(data.message);
            if (data.message === 'Logout successful') {
                localStorage.removeItem("token");
                toast.success(data.message);
                setLoginData(null)

            } else {
                toast.error("Logout failed");
            }
        } catch (error) {
            toast.error("An error occurred during logout");
        }
    };

    return (
        <>
            <div className="text-white px-3 py-3 ">
                <div className="mb-4  flex items-center space-x-3 justify-center p-3">
                    {/* <div className=" text-center text-2xl text-green-500 font-extrabold"><FaMicrophone/></div> */}
                    <div className='text-center text-2xl text-green-500 font-extrabold'>My Life </div>
                    <div ><sup className="text-red-500 text-lg"> <FaHeart/></sup></div>
                </div>
                <div >
                    {routes.map((route, index) => {
                        return (
                            <>
                                <NavLink key={index} className='cursor-pointer   ' to={route.path}>
                                    <div className=" border-b-4 border-white flex items-center hover:bg-emerald-900  space-x-8 p-3  ">
                                        <div className="text-white text-lg ">{route.icon}</div>
                                        <div className=" text-yellow-500 font-bold  text-lg ">{route.name}</div>
                                    </div>
                                </NavLink>
                            </>
                        )
                    })
                    }
                    <NavLink className='cursor-pointer   ' onClick={logout} >
                        <div className=" border-b-4 border-white flex items-center hover:bg-emerald-900  space-x-8 p-3  ">
                            <div className="text-white text-lg "><FaArrowAltCircleRight /></div>
                            <div className=" text-yellow-500 font-bold  text-lg ">Logout</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Sidebar;