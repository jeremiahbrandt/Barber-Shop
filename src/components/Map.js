import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = () => {
    const key = 'AIzaSyA2aUUJyN3NXOIBTNSDH-w0OFJYC-EVTGM'
    const center = {
        lat: 38.70,
        lng: -93.23
    }
    const zoom = 15
    return (
        <div className='map' style={{height: '500px',  width: '100%'}}>
            <GoogleMapReact
                // apiKey={key}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            <span
                lat={38.697560}
                lng={-93.233970}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    )
}

export default Map