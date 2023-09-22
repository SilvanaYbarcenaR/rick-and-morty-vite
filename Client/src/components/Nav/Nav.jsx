import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"
import RMText from "../../assets/rick_morty.png";
import { FaRandom } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const Nav = ({onSearch, randomHandler, logout}) => {
    const currentPath = useLocation();
    const email = JSON.parse(sessionStorage.getItem("auth")).email.split("@")[0];
    return(
        <header className={styleNav.header}>
            <div className={styleNav.leftHeader}>
            <img className={styleNav.imgHeader} src={RMText} alt="Rick and Morty"/>
                <NavLink to="/home" className={({isActive}) => isActive ? styleNav.active : ""}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? styleNav.active : ""}>About</NavLink>
                <NavLink to="/favorites" className={({isActive}) => isActive ? styleNav.active : ""}>Favorites</NavLink>
                <NavLink to="/episodes" className={({isActive}) => isActive ? styleNav.active : ""}>Episodes</NavLink>
            </div>
            
            <div className={styleNav.rightHeader}>
                {currentPath.pathname === "/home" &&
                    <>
                        <SearchBar onSearch={onSearch} />
                        <button onClick={randomHandler} className={styleNav.random}><FaRandom /><span>RANDOM</span></button>
                    </>
                }
                <p className={styleNav.user}>Bienvenid@ {email}</p>
                <button onClick={() => logout(true)} className={styleNav.logout}>
                    <MdOutlineLogout /><span>LOGOUT</span>
                </button>
            </div>
        </header>
    )
}

export default Nav;