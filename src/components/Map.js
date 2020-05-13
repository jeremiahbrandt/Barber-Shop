import React from "react"
import GoogleMapReact from "google-map-react"

const Map = () => {
  const center = {
    lat: 38.7,
    lng: -93.23,
  }
  const zoom = 15
  return (
    <div className="map" style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
        <span lat={38.69756} lng={-93.23397} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}

export default Map
