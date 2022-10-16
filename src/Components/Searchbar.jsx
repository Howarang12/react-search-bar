import { useState } from 'react'
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Searchbar = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if(searchWord === ''){
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className='search'>
      <div className="searchInputs">
        <input 
          type="text" 
          value={wordEntered} 
          placeholder={placeholder} 
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (<SearchIcon />) : 
          (<CloseIcon id='clearBtn' onClick={clearInput}/>)}
        </div>
      </div>
      { filteredData.length != 0 && (
       <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className='dataItem' href='#'> 
                <p>{value.title}</p> 
              </a>
            )
          })}
        </div> 
        )
      }
      
    </div>
  )
}

export default Searchbar