import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';



function MapView(props) {
    const defaultProps = {
        center: {
          lat: 4.579524,
          lng: -74.1574289
        },
        zoom: 15
      };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

          const [posicion, setPosicion] = useState({
            center: {
              lat:0,
              lng: 0
            },
            zoom: 0
          });

     navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosicion({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            zoom: 15
          });
        },
        function (error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        },
        {
          enableHighAccuracy: true,
         }
         );
      console.log(posicion)
    const  _onClick = ({x, y, lat, lng, event}) => {
      
      console.log(x, y, lat, lng, event)
      setPosicion({
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: 15
      });
    }

    const Marker = props => {
      return <>
        <div className="pin"></div>
        <div className="pulse"></div>
      </>
    }

    return (
        <>
        <h1>Geolocation</h1>
        <p>Latitude: {posicion.center.lat}</p>
        <p>longitude: {posicion.center.lng}</p>
        <div >
        <div style={{ height: '150vh', width: '150vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAVJ8ohZk2QG-3vHyrUMTwih-e87uRrcGU" }}
          defaultCenter={posicion.center}
          defaultZoom={posicion.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onClick={_onClick}
        >

        <Marker lat={posicion.center.lat} lng={posicion.center.lng} />    
        </GoogleMapReact>
      </div>
 </div>
 </>
    )
}

export default MapView
