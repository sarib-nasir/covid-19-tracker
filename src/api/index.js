import axios from "axios";
const url = "https://pomber.github.io/covid19/timeseries.json";
const url_2 = "https://covid19.mathdro.id/api";

export const virusDailyData = async (country) => {
  // let countryData = "US";

  if (country) {
    const { data } = await axios.get(url);
    const newData = data[country].map((allData, i) => ({
      confirmed: data[country][i].confirmed,
      recovered: data[country][i].recovered,
      deaths: data[country][i].deaths,
      date: data[country][i].date,
    }));
    // console.log(country);
    return newData;
  } else {
    const { data } = await axios.get(`${url_2}/daily`);
    const newData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      recovered: dailyData.recovered.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    // console.log(newData);
    return newData;
  }
};

export const geoCodeApi = async (country) => {
  var lat = null;
  var lng = null;
  let name = "Pakistan";
  if (country) {
    name = country;
  }
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${name}&key=78fa928ac40d468c8d87b1cd48cc971a`
  );
  lat = response.data.results[0].geometry.lat;
  lng = response.data.results[0].geometry.lng;
  return { lat, lng };
};

export const countries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url_2}/countries`);
  return countries.map((country) => country.name);
};
