import React, { useState } from 'react'
import './Searchbox.css'

const Searchbox = () => {

    const [value , setvalue] = useState("");

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2761b399caa5eb07cd02a313aa938317"

    let getweatherinfo = async () => {
        let response = await fetch (`${API_URL}?q=${value}&appid=${API_KEY}&units=metric`)
        let jsonresponse = await response.json();

        console.log(jsonresponse)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setvalue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setvalue("")
        getweatherinfo()
    }
  return (
    <form className='searchbox' onSubmit={handleSubmit}>
        <label htmlFor="search" className="search-label">City</label>
        <input type="text" placeholder="city" id='search' className="search-input" value={value} onChange={handleChange}/>
        <button type="submit" className="search-button">Search</button>
    </form>
  )
}

export default Searchbox