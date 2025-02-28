import "./CategoryItem.css"

const CategoryItem = ({ Cname, Cimage }: any) => {
    console.log(Cimage)
    return (
        <div className="category-list-item d-flex align-items-center rounded">
            <div className="text-center py-8 card-body ">
                <img src={Cimage} alt="" className="mb-3 img-fluid" />
                <div className="text-truncate">{Cname}</div>
            </div>
        </div>
    )
}

export default CategoryItem
