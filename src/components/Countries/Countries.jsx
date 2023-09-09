import { useEffect, useState } from "react";
import Country from "./../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCounties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCounties = [...visitedCountries, country];
    setVisitedCounties(newVisitedCounties);
  };

  return (
    <div>
      <div>
        <h5>Visited Countries: {visitedCountries.length} </h5>
        <ul>
          {visitedCountries.map((country) => {
            return <li key={country.cca3}>{country.name.common}</li>;
          })}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => {
          return (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountry={handleVisitedCountry}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
