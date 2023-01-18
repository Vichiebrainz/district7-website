import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
  ))
);

const GoogleMapWrapper = () => {
  return (
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDY6rlvy7_tDuX0-h_-2LxD2mpBwq_NINg&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `300px` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `500px` }} />}
    />
  );
};

export default GoogleMapWrapper;
