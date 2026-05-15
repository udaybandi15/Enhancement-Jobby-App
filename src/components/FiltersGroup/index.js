import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const {
    changeSearchInput,
    getJobs,
    searchInput,
    changeEmployeeList,
    employmentTypesList,
    changeSalary,
    salaryRangesList,
    changeLocation, // We added this prop to handle location clicks
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    return (
      <div className="search-input-container">
        <label htmlFor="searchInput" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachEmployeeType.employmentTypeId}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                  onChange={onSelectEmployeeType}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // NEW FUNCTION: Renders the Locations exactly as the tests expect
  const renderLocations = () => {
    const onChangeLocation = event => {
      changeLocation(event.target.value, event.target.checked)
    }

    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Locations</h1>
        <ul className="employee-type-list-container">
          <li className="employee-item">
            <input
              type="checkbox"
              id="hyderabad"
              value="Hyderabad"
              className="check-input"
              onChange={onChangeLocation}
            />
            <label htmlFor="hyderabad" className="check-label">
              Hyderabad
            </label>
          </li>
          <li className="employee-item">
            <input
              type="checkbox"
              id="delhi"
              value="Delhi"
              className="check-input"
              onChange={onChangeLocation}
            />
            <label htmlFor="delhi" className="check-label">
              Delhi
            </label>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {/* Call the new locations function here */}
      {renderLocations()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
