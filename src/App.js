import React, { Component } from "react";
import { virusDailyData, geoCodeApi } from "./api";
import Chart from "./components/charts/Chart";
import Cards from "./components/cards/Cards";
import CountryPicker from "./components/countryPicker/CountryPicker";
import Maps from "./components/maps/Maps";
import Navbar from "./Navbar";
class App extends Component {
  state = {
    data: {},
    latLng: {},
    country: "",
  };
  async componentDidMount() {
    const response = await virusDailyData();
    const getLatLng = await geoCodeApi();
    this.setState({ data: response, latLng: getLatLng });
    // console.log(response);
  }
  handleChange = async (country) => {
    const response = await virusDailyData(country);
    const getCountryLocation = await geoCodeApi(country);
    this.setState({ data: response, latLng: getCountryLocation, country });
  };
  render() {
    console.log(this.state.data[this.state.data.length - 1]);
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Cards data={this.state.data} />
            </div>
            <div className="col-sm-9 mt-3">
              <CountryPicker handleChange={this.handleChange} />
              <Chart data={this.state.data} country={this.state.country} />
            </div>
          </div>
          <div className="row mt-4 mb-5" style={{ height: "75vh" }}>
            <div className="col-sm-12 ">
              {this.state.country === "" ? (
                <h5 className="text-center">
                  map will be loadded when you will select a country
                </h5>
              ) : (
                <React.Fragment>
                  <h5 className="text-center">{this.state.country}</h5>
                  <Maps
                    data={this.state.data[this.state.data.length - 1]}
                    latLng={this.state.latLng}
                    country={this.state.country}
                  />
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
