import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) =>{
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>All the available Countries: {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length}</h3>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;