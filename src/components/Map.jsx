import React, { useMemo, useState } from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import marker from '../assets/marker.png'
import L from 'leaflet'
import { useSelector, useDispatch } from 'react-redux'
import "leaflet/dist/leaflet.css"
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import DraggableMarker from './DraggableMarker'
import DraggableMarker2 from './DraggableMarker2'
import { setDistance } from '../redux/actions';


const Map = () => {
    const { from, to } = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const ZOOM_LEVEL = 13
    const [center, setCenter] = useState({ lat: -31.4135, lng: -64.18105 })
    const markerIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [35, 45],
        iconAnchor: [17, 46],
        popupAnchor: [0, -46]
    })


    const distance = useMemo(() => {
        if (from && to) {
            const distanceInMeters = L.latLng(from.lat, from.lng).distanceTo(L.latLng(to.lat, to.lng));
            const distanceInKm = distanceInMeters / 1000;
            dispatch(setDistance(distanceInKm.toFixed(2)));
            return distanceInKm.toFixed(2);
        }
        return null;
    }, [from, to]);


    return (
        <>
            <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {location.loaded && !location.error && (
                    <Marker icon={markerIcon} position={[location.coordinates.lat, location.coordinates.lng]}>

                    </Marker>
                )}
                <DraggableMarker />
                <DraggableMarker2 />
            </MapContainer>
            {distance && (
                <div className='mt-2'>
                    <strong>Distancia: {distance} km</strong>
                    <br />
                    <span className='text-xs text-gray-400'>*Distancia aproximada</span>
                </div>
            )}
        </>
    )
}

export default Map