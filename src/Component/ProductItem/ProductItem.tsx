
import "./ProductItem.css"

const ProductItem = ({ image, category, name, d_price, price, offer, discount }: any) => {
    return (
        <div className="product-item-list">
            <div className="product-content rounded">
                <img src={image} alt="product image" />
                <div className="category text-muted">{category}</div>
                <div className="product-name">{name}</div>
                <div className="star-icon d-flex gap-1 ">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span className="text-muted">4.3 (5)</span>
                </div>
                <div className="card-price-butt d-flex justify-content-between align-items-center mt-3">
                    <div className="product-price">
                        <span className="text-dark mr-2">${d_price}</span>
                        <span className="text-decoration-line-through  text-muted">${price}</span>
                    </div>
                    <div className="add-butt">
                        <i className="bi bi-plus-lg"></i>
                        <a role="button" href="#" className="btn btn-primary btn-sm btn btn-primary"> Add</a>
                    </div>
                </div>
            </div>
            <div className="product-action-icon d-flex gap-1">
                <div className="heart eye"><i className="bi bi-eye"></i></div>
                <div className="heart"><i className="bi bi-heart"></i></div>
                <div className="heart trans"><i className="bi bi-arrow-left-right"></i></div>
            </div>
            <div className="offer-discount gap-3">
                <div className="offer">
                    <span className="badge rounded">{offer}</span>
                </div>
                <div className="discount">
                    <span className="badge rounded">{discount}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
