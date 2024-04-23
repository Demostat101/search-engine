import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import SearchData from '../searchData/SearchData';


const SearchDisplay = ({search, googledData, searchsetter})=>{
   
    const navigate = useNavigate();
    console.log(googledData);
    
    // useEffect((search)=>{
    //     if(search === '' || googledData === "{}"){
    //         navigate('/')
    //     }
    //     // navigate("/search")
    // }, [search])
    
    

    return(
        <div className='search-box-container'>
            <Header search={search} searchsetter={searchsetter}/>
             <div>
            <SearchData googledData={googledData}/>
            </div>
        </div>
       
    )
}

export default SearchDisplay;