import { ass_list } from "../../assets/assert"
import "./ProductItem.css"

const ProductItem = () => {
    return (
        <div className="product-item-list">
            <div className="product-content">
                <img src={ass_list.Chicken_Fish} alt="product image" />
                <div className="category text-muted">hello</div>
                <div className="product-name">Fish Food</div>
                <div className="star-icon">
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <span className="text-dark">$35 </span>
                        <span className="text-decoration-line-through text-muted">$35</span>
                    </div>
                    <div>
                        <a role="button" href="#" className="btn btn-primary btn-sm btn btn-primary"> Add</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
