import './index.css'

const VisitedCountryItem = props => {
  const {country, onClickRemove} = props
  const {id, name, imageUrl} = country

  const clickOnRemove = () => {
    onClickRemove(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="visited-country-container">
        <p className="visited-country-name"> {name}</p>
        <button type="button" onClick={clickOnRemove} className="remove-button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
