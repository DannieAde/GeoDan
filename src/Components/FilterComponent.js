import React, { useState } from 'react'

const FilterComponent = ({ handleSearchFilter, handleRegionFilter, searchCriteria }) => {

  const [showRegions, setShowRegions] = useState(false) 

  const toggleShowRegions = () => {
    setShowRegions(!showRegions)
  }

  const handleClickRegion = (e) => {
    toggleShowRegions()
    handleRegionFilter(e)
  }

  return (
    <div className='filter-countries'>
      <div className="search-filter">
        <img src="images/magnifying-glass-solid.svg" alt="" />
        <input value={searchCriteria} onChange={(e) => handleSearchFilter(e)} type="search" placeholder='Search for a country...' />
      </div>

      <div className='region-filter'>
        <div className="filter-control" onClick={toggleShowRegions}>
          <p>Filter By Region</p>
          <img src="images/chevron-down-solid.svg" alt="" />
        </div>
        <div className='regions' style={{visibility: showRegions ? 'visible' : 'hidden'}}>
          <p id='africa' onClick={(e) => handleClickRegion(e)}>Africa</p>
          <p id='americas' onClick={(e) => handleClickRegion(e)}>Americas</p>
          <p id='asia' onClick={(e) => handleClickRegion(e)}>Asia</p>
          <p id='europe' onClick={(e) => handleClickRegion(e)}>Europe</p>
          <p id='oceania' onClick={(e) => handleClickRegion(e)}>Oceania</p>
        </div>
      </div>

    </div>
  )
}

export default FilterComponent