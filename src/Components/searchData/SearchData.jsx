import "./searchData.css"
import Data from "../Data/Data";


const SearchData = ({googledData})=>{

 

    return(
        <div className="result-page">



            <p>
            All {googledData.searchInformation.formattedTotalResults }
            results found in {googledData?.searchInformation.formattedSearchTime } sec
            </p>

            <div className="search-data-result">
                {
                    googledData.items.map((data,index)=>(
                    <div className="search-data" key={index}> <Data data={data} index={index}/></div>
                    ))
                }
            </div>

        </div>
    )
}

export default SearchData;