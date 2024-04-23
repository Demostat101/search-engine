import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdApps } from "react-icons/md";
import "./Header.css"

const SubHeader = ()=>{
    return(
        <div className="menus">
            <ul style={{display:"flex"}}>
                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <CiSearch /><span>All</span>
                    </NavLink>
                </li>

                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <CiSearch /><span>Videos</span>
                    </NavLink>
                </li>

                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <MdApps /><span>More</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SubHeader;