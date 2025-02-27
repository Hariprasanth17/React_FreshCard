import { ass_list, sell_product } from "../../assets/assert";
import DailysellList from "../DailysellList/DailysellList";
import "./Dailysell.css";


const Dailysell = () => {
    return (
        <div className="container">
            <div className="daily-sell">
                <div className="daily-sell-heading">
                    <h3>Daily Best Sells</h3>
                </div>
                <div className="daily-sell-product d-flex gap-3">
                    <div className="sell-banner">
                        <img className="rounded" src={ass_list.sell_1} alt="daily sell" />
                        <div className="sell-banner-text">
                            <h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
                            <p className="text-white">Get the best deal before close.</p>
                            <a className="btn" href="">Shop Now
                                <i className="bi bi-arrow-right-short"></i>
                            </a>
                        </div>
                    </div>
                    {sell_product.map((item) => {
                        return <DailysellList image={item.image} category={item.category} name={item.name} d_price={item.disc_price} price={item.price} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Dailysell
