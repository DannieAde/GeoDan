import React from 'react'

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <div className='navbar'>
      <h1>GeoDan</h1>
      <div className='theme-toggle' onClick={toggleTheme}>
        <img className='theme-icon' src={darkMode ? '/images/light-icon.png' : '/images/moon-solid.svg'} alt="" />
        <p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </div>
  )
}

export default Navbar