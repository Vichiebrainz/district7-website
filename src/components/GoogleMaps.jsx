import React from "react";
import GoogleMapReact from "google-map-react";

const Map = (props) => {
  const { center, zoom } = props;

  return (
    <div className="relative h-64 w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAKva9SorNOuQBsC0tDy5SLJarYfQTeyGI" }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </div>
  );
};

export default Map;
