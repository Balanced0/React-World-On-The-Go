import React from 'react';
import { use } from 'react';

const Countries = ({countriesPromise}) =>{
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div><h1>All the available Countries: {countries.length}</h1></div>
    );
}

export default Countries;