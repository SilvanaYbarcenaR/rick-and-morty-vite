import { NavLink } from "react-router-dom";
import errorImage from "../../assets/error.jpg";
import errorStyles from "./Error.module.css"

const Error = () => {
    return (
       <div className={errorStyles.errorContainer}>
            <div className={errorStyles.error404}>
                <span>4</span>
                <img src={errorImage} alt="Error"></img>
                <span>4</span>
            </div>
            <p>The page you are trying to search has been moved to another universe.</p>
            <NavLink to="/home" className={errorStyles.btnHome}>Home</NavLink>
       </div>
    )
}

export default Error;