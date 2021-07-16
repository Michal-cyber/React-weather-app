import InputChart from './Chart/InputChart'

//styles
import './TableWeatherInput.css'
import '../assets/search.svg';

//constants
const getTime = (day) => {
	return day.getFullYear()+'/'+(day.getMonth()+1)+'/'+day.getDate();
}
const Celsius = (data) => {
	return Math.round((data -32)*5/9); 
};


const today = new Date();
const date = getTime(today);

const TableWeatherInput = (props) => {
    const {onInput} = props
    
  return (
      <div>
	  {onInput.message && ( <h2> {onInput.message} - Please enter valid city! </h2>) }
           { typeof onInput.main !== 'undefined' ? (
               <div className="weather-input"> 
                    <table>
                        <tr>
                            <th colSpan='5'>Weather in {onInput.name} | Current date: {date}</th>
                        </tr>
                        <tr>
                            <td rowSpan='1'> <img src={`http://openweathermap.org/img/w/${onInput.weather[0].icon}.png`}/> </td>
                            <td>Temperature: {Celsius(onInput.main.temp)} °C </td>
                            <td>{onInput.weather[0].description} </td>
                        </tr>
                        <tr>
                            <td>High Temp: {Celsius(onInput.main.temp_max)} °C</td>
                            <td></td>
                            <td>Visibility {onInput.visibility/1000} km</td>
                        </tr>
                        <tr>
                            <td>Low Temp: {Celsius(onInput.main.temp_min)} °C</td>
                            <td></td>
                            <td>Wind speed {onInput.wind.speed} m/sec</td>
                        </tr>
                        <tr>
                            <td>Pressure: {onInput.main.pressure} hPa</td>
                            <td></td>
                            <td>Wind direction: {onInput.wind.deg} degrees</td>
                        </tr>
                    </table>
                <InputChart chartData = {onInput}/>
                </div>
            ) : ''}

           
     </div>   
  );
}

export default TableWeatherInput;
