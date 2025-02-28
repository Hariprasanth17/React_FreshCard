import Searchbar from "../Searchbar/Searchbar"
import "./Navbar.css"


const Navbar = () => {
    return (
        <div>
            <Searchbar />
            <div className="container">

                <nav className="navbar navbar-expand-lg  ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <button type="button" id="dropdownMenuButton1" className=" btn"> All Departments</button>
                            <i className="bi bi-grid"></i>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav gap-2">
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shope
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Stores
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mega menu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dhashboard
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <hr />
        </div>
    )
}

export default Navbar
