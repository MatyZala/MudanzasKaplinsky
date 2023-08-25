import { useCallback, useMemo, useRef, useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { useSelector, useDispatch } from 'react-redux';
import { setToLocation } from '../redux/actions';

function DraggableMarker2() {


    const [draggable, setDraggable] = useState(false)
    const to = useSelector((state) => state.location.to);
    const dispatch = useDispatch();
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    dispatch(setToLocation(marker.getLatLng()));
                }
            },
        }),
        [dispatch],
    )
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, [])

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={to}
            ref={markerRef}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marcar Destino '
                        : 'Haga click aquí para hablitar la selección'}
                </span>
            </Popup>
        </Marker>
    )
}

export default DraggableMarker2