import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
onMarkerClick(props, marker, e) {
alert("Latitude : "+e.latLng.lat()+`
Longitude : `+e.latLng.lng());
}

  render() {
    return (
      <Map google={this.props.google}
                                                         initialCenter={{
                                                           lat: 18.6260919,
                                                           lng: 73.7065939
                                                         }}
                                                         zoom={15}
                                                         onClick={this.onMarkerClick}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAXqvMZ5O32-NGuSzrzA85lTSVw_H58hRw"
})(MapContainer)