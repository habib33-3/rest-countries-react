import CountryData from "./../CountryData/CountryData";
const CountryDetails = ({
  country,
  handleVisitedCountry,
  handleVisitedFlag,
}) => {
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      ></CountryData>
    </div>
  );
};

export default CountryDetails;
