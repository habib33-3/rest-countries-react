import { useEffect, useState } from "react";
import Country from "./../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="country-container">
      {countries.map((country) => {
        return <Country key={country.cca3} country={country}></Country>;
      })}
    </div>
  );
};

export default Countries;
