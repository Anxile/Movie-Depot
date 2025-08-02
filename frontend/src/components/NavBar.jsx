import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar({ setIsOnSearch }) {

    const handleSearchClick = () => {
        setIsOnSearch(false)
    }


    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link" onClick={handleSearchClick}>Home</Link>
            <Link to="/favorites" className="nav-link" onClick={handleSearchClick}>Favorites</Link>
        </div>
    </nav>
}

export default NavBar