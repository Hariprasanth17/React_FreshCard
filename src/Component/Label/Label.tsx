import "./Label.css"

const Label = () => {
  return (
    <div className="label-container">
      <div className="container">
        <div className="label d-flex justify-content-between align-items-center py-1">
          <div className="label-text">Super Value Deals - Save more with coupons</div>
          <div className="label-select">
            <select name="countries">
              <option value="GBP">🇬🇧&emsp;English</option>
              <option value="DE">🇩🇪&emsp;Deutsch</option>
            </select>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Label
