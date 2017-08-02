import React from 'react';
import { withGoogleMap, GoogleMap, Circle } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const mapStyle = require('./mapStyle');
const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBNCMxUuSa4XRej2ax-Lk4vinZJeNOIsKA';

const StyledGoogleMap = withScriptjs(
  withGoogleMap(props => {
    const { lat, lng, zoom, radius } = props;
    const center = new google.maps.LatLng(lat, lng);
    return (
      <GoogleMap
        defaultZoom={zoom}
        defaultCenter={center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          styles: mapStyle
        }}>
        <Circle
          center={center}
          radius={radius}
          options={{
            strokeColor: '#d34d35',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#d34d35',
            fillOpacity: 0.35
          }}
        />
      </GoogleMap>
    );
  })
);

export default class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng, radius, zoom } = this.props;
    return (
      <StyledGoogleMap
        lat={lat}
        lng={lng}
        radius={radius}
        zoom={zoom}
        googleMapURL={googleMapURL}
        loadingElement={
          <div>
            <h1>Loading...</h1>
          </div>
        }
        mapElement={<div style={{ height: `100%` }} />}
        containerElement={<section className="map" />}
      />
    );
  }
}
