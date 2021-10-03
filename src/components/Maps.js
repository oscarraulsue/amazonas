import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 4.579524,
      lng: -74.1574289
    },
    zoom: 15
  };
  

  render() {
    return (
      // Important! Always set the container height explicitly
      
      <div style={{ height: '50vh', width: '50vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAVJ8ohZk2QG-3vHyrUMTwih-e87uRrcGU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
         
        >
          <AnyReactComponent
            lat={4.579524}
            lng={-74.1574289}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;