import React from 'react'
import './Searchbar.css'

const Searchbar = ({placeholder, data}) => {
  return (
    <div className='search'>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      <div className="dataResults">

      </div>
    </div>
  )
}

export default Searchbar