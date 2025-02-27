import { ass_list } from "../../assets/assert"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="container ">
            <div id="carouselExampleSlidesOnly" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ass_list.slide_1} className="d-block " alt="..." />
                        <div className="carousel-item-content ps-lg-12 py-lg-16 py-14 px-8 text-start col-xxl-5 col-md-7 ">
                            <span className="badge rounded-pill bg-warning ">Opening Sale Discount 50%</span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                                SuperMarket For Fresh Grocery
                            </h2>
                            <p className="lead">
                                Introduced a new model for online grocery shopping and convenient home delivery.
                            </p>
                            <a href="#" className="mt-3 btn btn-dark">
                                Shop Now
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={ass_list.slide_2} className="d-block w-100 " alt="..." />
                        <div className="carousel-item-content ps-lg-12 py-lg-16 py-14 px-8 text-start col-xxl-5 col-md-7 ">
                            <span className="badge rounded-pill bg-warning ">Free Shipping - orders over $100</span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                                Free Shipping on orders over <span className="text-price">$100</span>
                            </h2>
                            <p className="lead">
                                Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
                            </p>
                            <a href="#" className="mt-3 btn btn-dark">
                                Shop Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
