import { useState, useEffect } from "react";
import Country from "../components/Country";
import './CountriesContainer.css';


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
                <Country country={country} />
                <hr></hr>
            </> 
        )  
    })

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[]);

    return(
        <>
        <div className="box">
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