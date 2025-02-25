import { ass_list } from "../../assets/assert";
import "./Searchbar.css";

const Searchbar = () => {
    return (
        <div className="container">
            <div className="searchbar d-flex justify-content-between py-3">
                <div className="logo d-flex align-items-center">
                    <img src={ass_list.logo} alt="logo" />
                </div>
                <div className="search-location gap-2 d-flex">

                    <div className="search ">
                        <i className="bi bi-search"></i>
                        <input type="search" id="search" className="rounded" name="search" placeholder="Search for products" />
                    </div>
                    <div className="location">
                        <input type="button" name="location" className="rounded" value="Location" />
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
                <div className="icon-list d-flex gap-3">
                    <div className="heart">
                        <i className="bi bi-heart"></i>
                        <div className="circle">5</div>
                    </div>
                    <div className="human"><i className="bi bi-person"></i></div>
                    <div className="bag">
                        <i className="bi bi-bag-check"></i>
                        <div className="circle">4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
