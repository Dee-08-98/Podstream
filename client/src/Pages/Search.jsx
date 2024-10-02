import React from 'react';
import SearchBar from '../Components/SearchBar';
import Layout from '../Layout/Layout';

function Search(props) {
    return (
     <>
     <SearchBar/>
     </>
    );
}

export default Layout()(Search);