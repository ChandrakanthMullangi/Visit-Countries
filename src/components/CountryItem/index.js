import './index.css'

const CountryItem = props => {
  const {country, onClickVisit} = props
  const {id, name, isVisited} = country

  const clickOnVisit = () => {
    onClickVisit(id)
  }

  return (
    <li className="country-item">
      <p className="country-name"> {name} </p>
      <div>
        {isVisited ? (
          <p className="visited-text"> Visited </p>
        ) : (
          <button type="button" className="visit-button" onClick={clickOnVisit}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
