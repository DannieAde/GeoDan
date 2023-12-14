import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams, Link } from 'react-router-dom';

const CountryPage = ({ homePage, darkMode, toggleTheme, countriesData }) => {

  const { name } = useParams()
  const [countryInfo] = countriesData.filter(country => country.name.toLowerCase() === name.toLowerCase());
  const [showFullPopulation, setShowFullPopulation] = useState(false)

  const showPopulation = () => {
    setShowFullPopulation(true)
  }

  const hidePopulation = () => {
    setShowFullPopulation(false)
  }

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

  const borderCountry = (border) => {
    const [borderResult] = countriesData.filter(country => country.alpha3Code.toLowerCase() === border.toLowerCase());
    return borderResult.name
  }

  const alphaCodeToCountry = (code) => {
    if (code.length === 2) {
      const [country] = countriesData.filter(data => data.alpha2Code.toLowerCase() === code.toLowerCase())
      return country.name
    }

    if (code.length === 3) {
      const [country] = countriesData.filter(data => data.alpha3Code.toLowerCase() === code.toLowerCase())
      return country.name
    }
  }
  

  return (
    <div style={{visibility: homePage ? 'hidden' : 'visible'}} className='country-page'>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Link to='/' className='go-back'>
          <img src="/images/left-long-solid.svg" alt="" />
          <p>Home</p>
      </Link>

      
      
      {countryInfo && (
        <div className='country-details'>
          <img src={countryInfo.flags.png} alt="" />

          <div className="detail-section">
            <h1>{countryInfo.name}</h1>

            <div className="details">
              <div>
                <h4>Native Name: <span>{countryInfo.nativeName}</span></h4>
                <h4>Population: <span onMouseEnter={showPopulation} onMouseLeave={hidePopulation}>{formatPopulation(countryInfo.population )}</span> <span className='button-style' style={{visibility: showFullPopulation ? 'visible' : 'hidden'}}>{countryInfo.population.toLocaleString()}</span></h4>
                <h4>Region: <span>{countryInfo.region}</span></h4>
                <h4>Sub Region: <span>{countryInfo.subregion}</span></h4>
                <h4>Capital: <span>{countryInfo.capital}</span></h4>
              </div>
              <div>
                <h4>Top Level Domain: <span>{countryInfo.topLevelDomain}</span></h4>
                <h4>Currency: <span>{countryInfo.currencies[0].name}</span></h4>
                <h4>Languages: 
                  <div className='languages-div'>
                    {countryInfo.languages.map((language, index) => <span key={index} className='button-style'>{language.name} </span>)}
                  </div>
                </h4>
              </div>
            </div>

            <div>
              <h4 >Border Countries: </h4>
              <div className='border-countries'>
                {countryInfo.borders && countryInfo.borders.map((border, index) => <Link key={index} to={`/country/${borderCountry(border)}`} className='button-style'>{alphaCodeToCountry(border)} </Link>)}
              </div>
            </div>
          </div>
        </div>
        )
      }

    </div>
  )
}

export default CountryPage;