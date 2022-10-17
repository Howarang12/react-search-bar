import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Data from './Data.json'

const params = {
  api_key: 'kSoKHldy0rVKdhIIBnitlmMwqtXUlRvybKvcCH9s',
  dataType: ['Survey (FNDDS)'],
  pagesize: 24
}
function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getData = async () => {
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/api_key=${encodeURIComponent(params.api_key)}&dataType=${encodeURIComponent(params.dataType)}`

    try{
      const response = await fetch(api_url)
      const data = await response.json()
      
      setFoods(data.foods)
      console.log(foods[0].description)
      console.log(foods)
    } catch(err) {
      console.log(err)
    }
    }

    getData()
  }, [])
  return (
    <div className="App">
      <Searchbar placeholder='Look up a food' data={Data}/>
    </div>
  );
}

export default App;
