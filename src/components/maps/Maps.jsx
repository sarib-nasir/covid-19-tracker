import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

export class Maps extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    //console.log(this.props.data);
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 40.463669,
            lng: -3.74922,
          }}
        >
          <Marker
            name={"Current location"}
            position={{
              lat: this.props.latLng.lat,
              lng: this.props.latLng.lng,
            }} //     lat: 30.375321,lng: 69.34511599999999,
            onClick={this.onMarkerClick}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <p>total cases: {this.props.data.confirmed}</p>
              <p>total recovered: {this.props.data.recovered}</p>
              <p>total deaths: {this.props.data.deaths}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "your_api_key",
})(Maps);
