import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [32, 32], // size of the icon
    /*shadowSize: [32, 64], // size of the shadow*/
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor*/
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
    const position = [22.472166, -83.637740]

    return (
        <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup>
                    <p>¡Hola!</p>
                </Popup>
            </Marker>
        </MapContainer >


    )
}

export default MapView