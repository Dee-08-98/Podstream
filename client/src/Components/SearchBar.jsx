
// import React, { useState, useEffect } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { Category } from '../utils/Data';
// import { Link } from 'react-router-dom';

// function SearchBar(props) {
//     const [search, setSearch] = useState('');
//     const [filteredCategories, setFilteredCategories] = useState(Category);

//     useEffect(() => {
//         const filtered = Category.filter(item =>
//             item.name.toLowerCase().includes(search.toLowerCase())
//         );
//         setFilteredCategories(filtered);
//     }, [search]);

//     return (
//         <>
//             <div className="flex justify-center">
//                 <div className="flex items-center justify-start w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] border-2 border-white mt-3 rounded-3xl p-[10px]">
//                     <div className="text-white ml-2">
//                         <FaSearch aria-label="Search Icon" />
//                     </div>
//                     <input
//                         onChange={(e) => setSearch(e.target.value)}
//                         type="text"
//                         placeholder='Search'
//                         className='bg-inherit text-white font-bold outline-none ml-3'
//                         aria-label="Search Input"
//                     />
//                 </div>
//             </div>
//             <div className="mt-5 px-3">
//                 <div>
//                     <h3 className='font-extrabold text-2xl text-white'>AutoBiography</h3>
//                 </div>
//                 <div className="mt-5 flex w-full flex-wrap items-center justify-evenly">
//                     {filteredCategories.length > 0 ? (
//                         filteredCategories.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="h-[250px]  w-full lg:w-[24%] md:w-[33%] sm:w-[48%] mb-16 rounded-xl p-2 text-white"
//                             >
//                                 <Link to={item.path}> <img
//                                     src={item.img}
//                                     className='h-full w-full rounded-xl hover:h-[270px] ease-in-out delay-150  '
//                                     alt={item.name}
//                                 />
//                                 </Link>
//                                 <h3 className='font-bold text-xl text-center text-green-400'>{item.name}</h3>
//                             </div>
//                         ))
//                     ) : (
//                         <p className='text-green-400 font-bold text-xl'>No categories found.</p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SearchBar;



import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const fetchCategories = () => {
        axios.get('http://localhost:4567/api/bioCategory/search')
            .then((res) => {
                setCategories(res.data.result);
                setFilteredCategories(res.data.result); // Set initial data
            })
            .catch((err) => {
                console.log('Searchbar error', err);
            })
    };
    // console.log(filteredCategories);

    useEffect(() => {
        // Fetch all categories initially
        fetchCategories();
    }, []);

    // Function to handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchCategories();
        }
    };

    useEffect(() => {
        // Fetch all categories initially
        searchCategories();
    }, [search]);

    // Function to filter categories based on search term
    const searchCategories = () => {
        const filtered = categories.filter(item =>
            item.bioName.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="flex items-center justify-start w-[85%] sm:w-[75%] md:w-[65%] lg:w-[50%] border-2 border-white mt-3 rounded-3xl p-[10px]">
                    <div className="text-white ml-2">
                        <FaSearch aria-label="Search Icon" />
                    </div>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder='Search'
                        className='bg-inherit text-white font-bold outline-none ml-3'
                        aria-label="Search Input"
                    />
                </div>
            </div>
            <div className="mt-5 px-3">
                <div>
                    <h3 className='font-extrabold text-2xl text-white'>AutoBiography</h3>
                </div>
                <div className="mt-5 flex w-full flex-wrap items-center justify-evenly">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((item, index) => (
                            <div
                                key={index}
                                className="h-[250px] w-full lg:w-[24%] md:w-[33%] sm:w-[48%] mb-16 rounded-xl p-2 text-white"
                            >
                                <Link to={item.bioPath}>
                                    <img
                                        src={item.bioCategoryImg}
                                        className='h-full w-full rounded-xl hover:h-[270px] ease-in-out delay-150'
                                        alt={item.bioName}
                                    />
                                </Link>
                                <h3 className='font-bold text-xl text-center text-green-400'>{item.bioName}</h3>
                            </div>
                        ))
                    ) : (
                        <p className='text-green-400 font-bold text-xl'>No categories found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchBar;
