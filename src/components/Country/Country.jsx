import React from 'react'
import {useState} from 'react'
import './Country.css'

const Country = ({country}) => {
    console.log(country);
    const[visit, setVisit] = useState(false);
    const handleVisited = () =>{
        if(visit){
            setVisit(false);
        }
        else{
            setVisit(true);
        }
    }
    return (
        <div className={`country ${visit && "country-visited"}`}>
            <h4>Name: {country.name.common}</h4>
            <div><img src={country.flags.flags.png} alt={country.flags.flags.alt}></img></div>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visit ? "Visited" : "Not Visited"}</button>
        </div>
    )
}

export default Country