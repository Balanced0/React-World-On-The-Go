import React from 'react'
import './Country.css'

const Country = ({country}) => {
    console.log(country);
  return (
    <div className='country'>
        <h4>Name: {country.name.common}</h4>
        <div><img src={country.flags.flags.png} alt={country.flags.flags.alt}></img></div>
        <p>Population: {country.population.population}</p>
        <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
    </div>
  )
}

export default Country