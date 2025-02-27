
import "./DailysellList.css"

const DailysellList = ({ image, category, name, d_price, price }: any) => {
    return (
        <div className="sell-product-list rounded">
            <div className="sell-product-list-image d-flex justify-content-center">
                <img src={image} alt="product image" />
            </div>
            <div className="sell-category text-muted mb-1">{category}</div>
            <div className="sell-product-name mb-2">{name}</div>
            <div className="sell-price-rating mb-2 d-flex justify-content-between">
                <div className="product-price ">
                    <span className=" disc-price">${d_price}</span>
                    <span className="text-decoration-line-through  text-muted">${price}</span>
                </div>
                <div className="star-icon d-flex gap-1 ">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span className="text-muted">4.3 (5)</span>
                </div>
            </div>
            <div className="add-butt d-flex align-items-center mb-4">
                <i className="bi bi-plus-lg"></i>
                <a role="button" href="#" className="btn "> Add to Card</a>
            </div>
            <div className="sell-countdown d-flex flex-wrap justify-content-center gap-2">
                <div className="rounded days">
                    <span className="countdown-value">374</span>
                    <span className="text-muted">Days</span>
                </div>
                <div className="rounded hour">
                    <span className="countdown-value">9</span>
                    <span className="text-muted">Days</span>
                </div>
                <div className="rounded minute">
                    <span className="countdown-value">45</span>
                    <span className="text-muted">Days</span>
                </div>
                <div className="rounded second">
                    <span className="countdown-value">46</span>
                    <span className="text-muted">Days</span>
                </div>
            </div>
            <div className="product-action-icon d-flex gap-1">
                <div className="heart eye"><i className="bi bi-eye"></i></div>
                <div className="heart"><i className="bi bi-heart"></i></div>
                <div className="heart trans"><i className="bi bi-arrow-left-right"></i></div>
            </div>
        </div>
    )
}

export default DailysellList
