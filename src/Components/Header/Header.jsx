import SearchHeader from "./SearchHeader";
import SubHeader from "./SubHeader";
import "./Header.css"

const Header = ({search, searchsetter})=>{
    return(
        <div className="headerContainer">
        <SearchHeader search={search} searchsetter={searchsetter}/>
            <SubHeader />
        </div>
    )
}

export default Header;