import React from 'react'
 import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
   width: '400px',
 height: '400px'
};

 const center = {
  lat: 35.86498,
   lng: 10.59956
};

function MyComponent() {
   return (
    <LoadScript
      googleMapsApiKey="AIzaSyCXyyBx5705kOL9i-hhB-oDV_f4Vst3YVw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        style= {{width:"100%",height:"100%"}}
      >
        { /* Child components, such as markers, info windows, etc. */ }
       <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyComponent