import React, { useState, useEffect } from "react";
import { countries } from "../../api";

const CountryPicker = ({ handleChange }) => {
  const [getCountries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountry = async () => {
      setCountries(await countries());
    };
    fetchCountry();
  }, [setCountries]);

  // console.log(getCountries);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-3" style={{paddingLeft: '0px',paddingRight:' 0px'}}>      
          <select
            className="form-control form-control-sm d-block"
            onChange={(e) => handleChange(e.target.value)}
            style={{backgroundColor:'transparent'}}
          >
            <option value="">global</option>
            {getCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default CountryPicker;
