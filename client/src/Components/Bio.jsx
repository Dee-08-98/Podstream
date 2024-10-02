import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Bio(props) {

    const id = 123

    return (
        <>
            <div className="my-[80px] ml-3 mr-3  md:flex  items-center  h-auto bg-white bg-opacity-75  rounded-xl">
                <div className="text-white  h-[250px] md:h-[200px] lg:w-[30%] md:w-[40%] bg-red-400 w-full rounded-xl ">
                    <img src="./f8.jpeg" alt="Image" className='h-full w-full rounded-xl' />
                </div>
                <div className="mx-auto">
                    <div className="text-white  text-center flex flex-col  mt-3 justify-center">
                        <h3 className='font-extrabold text-3xl text-cyan-900' style={{ textShadow: "2px 1px 2px white" }}>Mahendra Singh Dhoni</h3>
                        <h3 className='font-extrabold text-lg text-cyan-900'>Indian - Crickter</h3>

                    </div>
                    <div className="text-white text-center mt-3">
                        <Link to={`/culture/${id}`}><button className='bg-cyan-600 md:text-white   px-4 py-3 bg-opacity-95 font-extrabold rounded-lg w-full'> See More Info</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bio;