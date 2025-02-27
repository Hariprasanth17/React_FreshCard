import "./Section.css"

const Section = () => {
    return (
        <div>
            <div className="container" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                    <div className="section-data feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-clock-history"></i>
                        </div>
                        <h2>10 minute grocery now</h2>
                        <p className="text-muted">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>

                    </div>
                    <div className="section-data feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-gift"></i>
                        </div>
                        <h2>Best Prices & Offers</h2>
                        <p className="text-muted">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>

                    </div>
                    <div className="section-data feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-box-seam"></i>
                        </div>
                        <h2>Wide Assortment</h2>
                        <p className="text-muted">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>

                    </div>
                    <div className="section-data feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-arrow-repeat"></i>
                        </div>
                        <h2>Easy Returns</h2>
                        <p className="text-muted">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
