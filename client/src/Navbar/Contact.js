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

function Contact() {
  return (
    <div style={{textAlign:'center'}}>
  <img data-visualcompletion="media-vc-image" alt="Aucune description de photo disponible." class="x1bwycvy x193iq5w x4fas0m x19kjcj4" referrerpolicy="origin-when-cross-origin" src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/81742819_115720989940377_5994993167974268928_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=174925&amp;_nc_ohc=34BxYhltUS4AX-m8H1K&amp;_nc_ht=scontent.ftun16-1.fna&amp;oh=00_AfBaRX0lXi5uCJNjgR-_z-MpqDLgsBEGx_N5sXGL8kuP7Q&amp;oe=638A409E"></img>
      <h3>Adresse </h3>
      <p>Rue el maamoun Hammam Sousse 4011</p>
      <h3>Téléphone</h3>
      <p>+216 73 360 600</p>
      <h3>Courriel</h3>
      <p>mjmjelbhaier@gmail.com</p>
      <h3>Facebook</h3>
      <p>Maison des jeunes Elbhaier Hammam Sousse - دار الشباب البحاير حمّام سوسة</p>
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
    </div>
    
  )

}

export default Contact








