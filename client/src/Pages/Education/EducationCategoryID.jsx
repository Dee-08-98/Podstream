import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function EducationCategoryID() {
    const { id } = useParams();
    const [bio, setBio] = useState(null);

    useEffect(() => {
        axios.post(`http://localhost:4567/api/bioCategory/sportCategory/${id}`)
            .then((res) => {
                setBio(res.data.result);
            })
            .catch((err) => {
                console.log('Sport category Data fetching error', err);
            });
    }, [id]);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">

            {bio ? (
                <>
                    <div className="w-full lg:px-28 py-8">
                        <div className=" px-2 sm:flex md:space-x-4 mb-8 w-full">

                            {bio.imageHeader.map((item, index) => (
                                <div key={index} className=" h-80 w-full md:w-[50%]">
                                    <img src={item.img} alt="image" className='h-full w-full  rounded-lg shadow-lg' />
                                </div>

                            ))}
                        </div>

                        <div className="hidden md:block">
                            <div className="flex flex-wrap gap-2">

                                {bio.imageGallery.map((item, index) => (
                                    <div key={index} className=" sm:w-1/2 md:w-1/3 p-2 h-40 w-full">
                                        <img src={item.img} alt="image" className='h-40 w-full size-fit object-fill rounded-lg shadow-md' />
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-8 max-w-7xl lg:mx-28 ">

                        <div className="flex flex-wrap">
                            <h3 className='text-4xl font-extrabold mb-4 text-rose-600'>
                                {bio.name} :
                            </h3>
                            <span className='text-fuchsia-700 text-4xl font-extrabold ml-2'> ({bio.nickName}) </span>
                        </div>


                        <div className="border-b-4 border-green-600 mt-4 mb-4"></div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'>D.O.B :
                            <span className='ml-3 text-white text-[16px]'>{bio.dob ? bio.dob : 'Unknown'}</span></p>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'>Education : 
                            <span className='ml-3  text-white text-[16px]'>{bio.education ? bio.education : 'Unknown'}</span></p>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'>Parents : 
                            <span className='ml-3 text-white text-[16px]'>{bio.parents ? bio.parents : 'Unknown'}</span></p>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'> Spouse : 
                            <span className='ml-3 text-white text-[16px]'>{bio.spouse ? bio.spouse : 'Unknown'}</span></p>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'>Children :
                            <span className='ml-3 text-white text-[16px]'>{bio.children ? bio.children : 'Unknown'}</span> </p>
                        </div>

                        <div className="flex flex-wrap mb-4">
                            <p className='text-[21px] font-semibold text-green-500'> netWorth : 
                            <span className='ml-3 text-white text-[16px]'>{bio.netWorth ? bio.netWorth : 'Unknown'}</span></p>
                        </div>

                        <p className='mb-6 text-lg leading-relaxed text-justify'>
                            {bio.about ? bio.about : 'No information available.'}
                        </p>

                        <div className="border-b-4 border-green-600 mt-4 mb-4"></div>


                        <h3 className='text-2xl font-bold mb-4 text-yellow-400 underline'>Early Life and Career</h3>
                        <p className='mb-6 text-lg leading-relaxed text-justify'>
                            {bio.earlyLife ? bio.earlyLife : 'No information available.'}
                        </p>
                        <h3 className='text-2xl font-bold mb-4 text-yellow-400 underline'>Record-Breaking Career</h3>
                        <p className='mb-6 text-lg leading-relaxed text-justify'>
                            {bio.career ? bio.career : 'No information available.'}
                        </p>
                        <h3 className='text-2xl font-bold mb-4 text-yellow-400 underline'>Impact and Legacy</h3>
                        <p className='mb-6 text-lg leading-relaxed text-justify'>
                            {bio.impact ? bio.impact : 'No information available.'}
                        </p>
                        <h3 className='text-2xl font-bold mb-4 text-yellow-400 underline '>Awards and Recognition</h3>
                        <p className='mb-6 text-lg leading-relaxed text-justify'>
                            {bio.awards ? bio.awards : 'No information available.'}
                        </p>
                        <h3 className='text-2xl font-bold mb-4 text-yellow-400 underline'>Conclusion</h3>
                        <p className='text-lg leading-relaxed text-justify'>
                            {bio.conclusion ? bio.conclusion : 'No information available.'}
                        </p>
                    </div>
                </>
            ) : (
                <p className='text-center text-yellow-400 font-bold text-xl'>Loading...</p>
            )}

        </div>
    );
}

export default EducationCategoryID;


