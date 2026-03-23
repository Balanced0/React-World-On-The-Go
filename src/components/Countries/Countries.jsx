import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) =>{
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        console.log('Handle Visited Country clicked', country);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>All the available Countries: {countries.length}</h1>
            <div className="countries">
                {
                    countries.map(country => <Country country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
}

export default Countries;