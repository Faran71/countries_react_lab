const Country = ({country}) => {

    return(
        <>
            <h3>{country.name.common}  {country.flag}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            {/* <p>Timezone: {country.timezones}</p> */}
            <p></p>
        </>
    )

}

export default Country;