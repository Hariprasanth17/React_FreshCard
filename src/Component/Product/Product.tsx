import { product_list } from "../../assets/assert"
import ProductItem from "../ProductItem/ProductItem"
import "./Product.css"

const Product = () => {
    return (
        <div className="container">
            <div className="container-inside my-5">
                <div className="product-heading">
                    <h3 className="">Popular Products</h3>
                </div>
                <div className="product-list d-flex flex-wrap justify-content-center gap-3">
                    {product_list.map((item) => {
                        return <ProductItem key={item._id} image={item.image} category={item.category} name={item.name} d_price={item.disc_price} price={item.price} offer={item.offer} discount={item.discount} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product
