import './Header.scss'
import {HeaderNav} from "../HeaderNav/HeaderNav";

export const Header = () => {
    return (
        <header
            className="header"
        >
            <HeaderNav />
        </header>
    )
}