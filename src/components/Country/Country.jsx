import React from 'react'

const Country = ({country}) => {
    console.log(country);
  return (
    <div>
        <h4>Name: {country.name.common}</h4>
        <div><img src={country.flags.flags.png} alt={country.flags.flags.alt}></img></div>
        <p>Population: {country.population.population}</p>
    </div>
  )
}

export default Country