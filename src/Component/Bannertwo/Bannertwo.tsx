import { ass_list } from "../../assets/assert"
import "./Bannertwo.css"

const Bannertwo = () => {
  return (
    <div className="container " >
      <div className="continer-inside flex-wrap  d-flex justify-content-between gap-3">
        <div className="banner-two rounded">
          <div className="image">
            <img src={ass_list.banner_1} alt="Banner-2" />
          </div>
          <div className="banner-tow-content">
            <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
            <p className="mb-4 text-muted"> Get Upto <span className="fw-bold">30%</span> Off </p>
            <a role="button" href="#!" className="btn btn-dark"> Shop Now </a>
          </div>
        </div>

        <div className="banner-two  px-8 rounded">
          <div className="image col-6">
            <img src={ass_list.banner_2} alt="Banner-2" />
          </div>
          <div className="banner-tow-content">
            <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
            <p className="mb-4 text-muted">Get Upto <span className="fw-bold">25%</span> Off</p>
            <a role="button" href="#" className="btn btn-dark"> Shop Now </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bannertwo
