import React from 'react';
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom = {17}
        defaultCenter = {{lat:35.661725, lng: 139.732981}}
    >
        <Marker position={{ lat: 35.661725, lng: 139.732981}} />
    </GoogleMap>
))

export default Map;