import ProductItem from "../ProductItem/ProductItem"
import "./Product.css"

const Product = () => {
    return (
        <div className="container">
            <div className="container-inside">
                <div className="product-heading">
                    <h3 className="">Popular Products</h3>
                </div>
                <div className="product-list d-flex">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default Product
