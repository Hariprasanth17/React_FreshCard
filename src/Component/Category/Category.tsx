import { category_list } from "../../assets/assert"
import CategoryItem from "../CategoryItem/CategoryItem"
import "./Category.css"

const Category = () => {
    return (
        <div className="container">
            <div className="container-side">
                <div className="Category-heading d-flex justify-content-between">
                    <h3>Featured Categories</h3>
                    <div className="category-icon d-flex gap-2">
                        <div className="circle  bg-body-tertiary"><i className="bi bi-chevron-left"></i></div>
                        <div className="circle  bg-body-tertiary"><i className="bi bi-chevron-right"></i></div>
                    </div>
                </div>
                <div className="categary-item d-flex overflow-auto">
                    <div className="d-flex  gap-3">
                        {category_list.map((item) => {
                            return <CategoryItem  Cname={item.category_name} Cimage={item.category_image}/>
                        })}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Category
