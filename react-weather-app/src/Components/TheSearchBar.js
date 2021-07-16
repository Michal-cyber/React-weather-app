import React, { useRef } from 'react'
import { debounce } from 'lodash';

//styles
import './TheSearchBar.css'

function TheSearchBar(props) {

    const searchInput = useRef(null);

    const searchForWeather = () => {
         let searchString = searchInput.current?.value; 
         if (searchString) props.onSearch(searchString);
    }
 
 /** @param Form submit form */
 const handleSubmit = (e) => { 
    e.preventDefault();
    searchForWeather();
 }

 
 /** @param Input element */
  const handleInput = debounce((e) => { 
    searchForWeather();
 },500)

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input 
                autoFocus
                type="text" 
                ref = {searchInput}
                onChange={handleInput} 
                className ="search" 
            />
        </form>
    </div>
  );
}

export default TheSearchBar;
