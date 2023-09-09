import { useState } from "react";
import "./Country.css";
import CountryDetails from "./../CountryDetails/CountryDetails";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population :{population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlag(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? " visited" : " want to visit"}
      <hr />
      <CountryDetails
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryDetails>
    </div>
  );
};

export default Country;
