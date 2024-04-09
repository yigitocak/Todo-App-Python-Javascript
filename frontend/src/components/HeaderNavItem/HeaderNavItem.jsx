import {Link} from "react-router-dom";
import "./HeaderNavItem.scss"

export const HeaderNavItem = () => {
    return (
        <>
            <li>
                <Link
                    to="/"
                    className="header__nav-item"
                >Home</Link>
            </li>
            <li>
                <Link
                    to="/login"
                    className="header__nav-item"
                >Sign In</Link>
            </li>
        </>
    )
}