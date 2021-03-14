import React from 'react';
import './App.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "bootstrap/dist/css/bootstrap.min.css";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    //Ashdod location 
    defaultCenter={{ lat: 31.801447, lng: 34.643497 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 31.801447, lng: 34.643497}} />}
  </GoogleMap>))

class App extends React.Component {


  
  render() {

    return (
      <>
      <div>
        <h1>GOOGLE MAPS API with REACT JS</h1>
        <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
      </div>
      </>
    )
  }
}

export default App