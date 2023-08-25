import { useCallback, useMemo, useRef, useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { useSelector, useDispatch } from 'react-redux';
import { setFromLocation } from '../redux/actions';


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

    const cambiarEstado = () => {
        dispatch({ type: 'CAMBIAR_ALGO', payload: newData });
    }



    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={from}
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