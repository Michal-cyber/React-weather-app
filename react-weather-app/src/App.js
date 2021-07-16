import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//Components, children
import TheSearchBar from './Components/TheSearchBar';
import TableWeatherInput from './Components/TableWeatherInput';
//constants
const apiKey = '04cb9c6536c7d98f04450c412243bde4'

function App() {
  const [weather, setWeather] = useState([]);

  const hanldeSearch = (query) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`)
          .then(res =>res.json())
          .then(res => setWeather(res))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TheSearchBar onSearch = {hanldeSearch}/>
        <TableWeatherInput onInput = {weather}/>
      </header>
    </div>
  );
}

export default App;
