import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import data from './data'
import CountryPage from './Pages/CountryPage';
import HomePage from './Pages/HomePage';

function App() {

  const [countriesData, setCountriesData] = useState([])
  const [filteredData, setFilteredData] = useState([]);


  const [filterCriteria, setFilterCriteria] = useState('')
  const [searchCriteria, setSearchCriteria] = useState('')

  const [darkMode, setDarkMode] = useState(false) 

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }
  
  
  // eslint-disable-next-line
  useEffect(() => {
    setCountriesData(data)
    setFilteredData(data)
  }, [])

  useEffect(() => {
    applyFilters();
    //eslint-disable-next-line
  }, [filterCriteria, countriesData, searchCriteria]);

  const applyFilters = () => {
    if (searchCriteria) {
      setFilteredData(countriesData.filter((country) => country.name.toLowerCase().includes(searchCriteria.toLowerCase())));
    } 

    if(searchCriteria === '') {
      setFilteredData(countriesData)
    }

    if (filterCriteria ) {
      setFilteredData(countriesData.filter((country) => country.region.toLowerCase() === filterCriteria.toLowerCase()));
    }
  };

  const handleSearchFilter = e => {
    setFilterCriteria('')
    const search = e.target.value
    setSearchCriteria(search)
  };

  const handleRegionFilter = (e) => {
    setSearchCriteria('')
    const region = e.target.id
    setFilterCriteria(region)
  }

  return (
    <div className={darkMode ? "App dark" : 'App'}>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage 
                                              darkMode={darkMode} 
                                              toggleTheme={toggleTheme} 
                                              handleSearchFilter={handleSearchFilter} 
                                              handleRegionFilter={handleRegionFilter}
                                              filteredData={filteredData}
                                              searchCriteria={searchCriteria}
                                              />}/>
          <Route path='/country/:name' element={<CountryPage darkMode={darkMode} toggleTheme={toggleTheme} countriesData={countriesData}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
