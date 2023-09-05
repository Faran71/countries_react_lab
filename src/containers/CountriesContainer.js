import { useState, useEffect } from "react";
import Country from "../components/Country";
import './CountriesContainer.css';
import ReactModal from 'react-modal';
import CountryName from "../components/CountryName";

const CountriesContainer = () => {

    const[countries, setCountries] = useState([])

    const[visitedCountries, setVisitedCountries] = useState([]);

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }


    const mappedCountries = countries.map(country => {   
        
        const deleteCountry = (e) => {
            setCountries(temp => {
                return temp.filter(country => country!== e);
            })
            setVisitedCountries([...visitedCountries,e])
        }   

        return(
            <>
                <Country country={country} />
                <button onClick={()=> deleteCountry(country)}>Visited</button>
                <hr></hr>
            </> 
        )  
    })
    const mappedVisitedCountries =visitedCountries.map(country => {        
        return(
            <>
                <CountryName country={country} />
                <hr></hr>
            </> 
        )  
    })

    

    useEffect(() => {
        loadData();
    },[]);

    const filterCountries = (e) => {
        console.log(e);
        let filtered = countries.filter(country => country.name.common.toLowerCase().includes(e));
        setCountries(filtered);
    }

    return(
        <>
    
        <div className="box">
            <input placeholder="Enter Country" 
            onChange={ (e) => filterCountries(e.target.value) }/>
            <input type="submit" />
            <h2>Countries</h2>
            <hr></hr>
            {mappedCountries}
        </div>
        <div className="box">
            <h2>VisitedCountries</h2>
            <hr></hr>
            {mappedVisitedCountries}
        </div>
        </>
    )

}

export default CountriesContainer;