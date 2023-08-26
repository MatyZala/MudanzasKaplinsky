import { useCallback, useMemo, useRef, useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { useSelector, useDispatch } from 'react-redux';
import { setFromLocation } from '../redux/actions';
import Mark from '../assets/mark.png'
import L from 'leaflet'

function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const from = useSelector((state) => state.location.from);
    const dispatch = useDispatch();
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                dispatch(setFromLocation(marker.getLatLng()));
                if (marker != null) {
                    dispatch(setFromLocation(marker.getLatLng()));
                }
            },
        }),
        [dispatch],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])


    const markerIcon = new L.Icon({
        iconUrl: 'https://res.cloudinary.com/durff4va2/image/upload/v1693009360/map_vwslni.png',
        iconSize: [35, 35]
    })

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={from}
            icon={markerIcon}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marcar Punto de Partida '
                        : 'Haga click aquí para hablitar la selección'}
                </span>
            </Popup>
        </Marker>
    )
}

export default DraggableMarker