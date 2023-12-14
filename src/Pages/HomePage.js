import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import FilterComponent from '../Components/FilterComponent'

const HomePage = ({ darkMode, toggleTheme, handleSearchFilter, handleRegionFilter, filteredData, setSearchState, searchCriteria }) => {

  const formatPopulation = (number) => {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(2) + ' Billion';
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(2) + ' Million';
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(2) + ' Thousand';
    }
    return number.toString();
}

  return (
    <div>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <FilterComponent handleSearchFilter={(e) => handleSearchFilter(e)} handleRegionFilter={(e) => handleRegionFilter(e)} setSearchState={setSearchState} searchState searchCriteria={searchCriteria}/>
      
      <div className='countries'>
        {filteredData.map((country, index) => (
          <Link key={index} to={`/country/${country.name.toLowerCase()}`} className='country'>
            <img src={country.flags.png} alt="" />
            <div className='country-info'>
              <h3>{country.name}</h3>
              <p>Population: {formatPopulation(country.population)}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage