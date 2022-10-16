import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Data from './Data.json'

function App() {
  return (
    <div className="App">
      <Searchbar placeholder='Look up a food' data={Data}/>
    </div>
  );
}

export default App;
