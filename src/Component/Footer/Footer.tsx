import { ass_list } from "../../assets/assert"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-category d-flex my-4">
                    <div className="category-content col-4 ">
                        <h6>Categories</h6>
                        <div className="category-column d-flex ">
                            <div className="category-list text-decoration-none d-flex flex-column col-6">
                                <a href="#" className="text-decoration-none">Vegetables & Fruits </a>
                                <a href="#" className="text-decoration-none">Breakfast & instant food </a>
                                <a href="#" className="text-decoration-none"> Bakery & Biscuits</a>
                                <a href="#" className="text-decoration-none">Atta, rice & dal </a>
                                <a href="#" className="text-decoration-none">Sauces & spreads </a>
                                <a href="#" className="text-decoration-none">Organic & gourmet  </a>
                                <a href="#" className="text-decoration-none"> Baby care </a>
                                <a href="#" className="text-decoration-none"> Cleaning essentials </a>
                                <a href="#" className="text-decoration-none"> Personal care </a>
                            </div>
                            <div className="category-list d-flex flex-column col-6">
                                <a href="#" className="text-decoration-none"> Dairy, bread & eggs </a>
                                <a href="#" className="text-decoration-none">Cold drinks & juices </a>
                                <a href="#" className="text-decoration-none">Tea, coffee & drinks </a>
                                <a href="#" className="text-decoration-none">Masala, oil & more </a>
                                <a href="#" className="text-decoration-none">Chicken, meat & fish </a>
                                <a href="#" className="text-decoration-none">Paan corner </a>
                                <a href="#" className="text-decoration-none"> Pharma & wellness </a>
                                <a href="#" className="text-decoration-none">Home & office </a>
                                <a href="#" className="text-decoration-none"> Pet care</a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-8">
                        <div className="four-category d-flex justify-content-between">
                            <div className="first-category">
                                <h6>Get to know us</h6>
                                <div className="first-category-list d-flex flex-column">
                                    <a href="#" className="text-decoration-none">Get to know us</a>
                                    <a href="#" className="text-decoration-none">Company</a>
                                    <a href="#" className="text-decoration-none">About</a>
                                    <a href="#" className="text-decoration-none">Help Center </a>
                                    <a href="#" className="text-decoration-none">Our Value</a>
                                </div>
                            </div>
                            <div className="second-category">
                                <h6>Get to know us</h6>
                                <div className="first-category-list  d-flex flex-column">
                                    <a href="#" className="text-decoration-none">Payments</a>
                                    <a href="#" className="text-decoration-none">Shipping</a>
                                    <a href="#" className="text-decoration-none">Product Returns</a>
                                    <a href="#" className="text-decoration-none">FAQ </a>
                                    <a href="#" className="text-decoration-none">Shop Checkout</a>
                                </div>
                            </div>
                            <div className="third-category"> <h6>Get to know us</h6>
                                <div className="first-category-list  d-flex flex-column">
                                    <a href="#" className="text-decoration-none">Shopper Opportunities</a>
                                    <a href="#" className="text-decoration-none">Become a Shopper  </a>
                                    <a href="#" className="text-decoration-none">Earnings</a>
                                    <a href="#" className="text-decoration-none">Ideas & Guides</a>
                                    <a href="#" className="text-decoration-none">New Retailers</a>
                                </div></div>
                            <div className="fourth-category"> <h6>Get to know us</h6>
                                <div className="first-category-list  d-flex flex-column">
                                    <a href="#" className="text-decoration-none">Freshcart programs </a>
                                    <a href="#" className="text-decoration-none">Gift Cards</a>
                                    <a href="#" className="text-decoration-none">Promos & Coupons </a>
                                    <a href="#" className="text-decoration-none">Freshcart Ads</a>
                                    <a href="#" className="text-decoration-none">Careers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Payment Partners Section and App   */}
                <div className="footer-payment-app">
                    <div className="border-top  border-bottom py-3 d-flex justify-content-between align-items-center">
                        <div className="text-lg-start text-center mb-2 mb-lg-0 col-lg-5">
                            <ul className="mb-0 list-inline">
                                <li className="text-dark list-inline-item">Payment Partners</li>
                                <li className="list-inline-item">
                                    <a href="#"><img src={ass_list.amazon} alt="Amazon Pay" className="" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><img src={ass_list.American} alt="American Express" className="" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><img src={ass_list.Mastercard} alt="MasterCard" className="" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><img src={ass_list.paypol} alt="PayPal" className="" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><img src={ass_list.visa} alt="Visa" className="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 mt-md-0 col-lg-7 d-flex justify-content-end align-items-center">
                            <div className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</div>
                            <a href="#" target="_blank">
                                <img src={ass_list.appstore} alt="Download on the App Store" className="" />
                            </a>
                            <a href="#" target="_blank">
                                <img src={ass_list.playstore} alt="Get it on Google Play" className="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* footer-rights-socialmedia */}
                <div className="footer-rights-socialmedia">
                    <div className="footer-info-row align-items-center row mt-4">
                        <div className="footer-info col-md-6">
                            <span className="footer-text small text-muted">© 2022 <span id="copyright">- 2025</span> FreshCart eCommerce HTML Template. All rights reserved. Powered by
                                <a target="_blank" href="#"> Codescandy</a>.
                            </span>
                        </div>
                        <div className="footer-social col-md-6">
                            <ul className="social-list list-inline text-md-end mb-0 small mt-3 mt-md-0">
                                <li className="social-title list-inline-item text-muted">Follow us on</li>
                                <li className="social-item me-2 list-inline-item">
                                    <a className="social-link btn btn-xs btn-social btn-icon" href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li className="social-item me-2 list-inline-item">
                                    <a className="social-link btn btn-xs btn-social btn-icon" href="#">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li className="social-item me-2 list-inline-item">
                                    <a className="social-link btn btn-xs btn-social btn-icon" href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
