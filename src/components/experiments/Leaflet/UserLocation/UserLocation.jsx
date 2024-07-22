import locationIcon from "@/assets/images/location_icon.png"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { useEffect, useState } from "react"
import L from "leaflet"
import PropTypes from "prop-types"

function UserLocation({ flyToUserLocationTrigger, locationFound, defaultZoom }) {
  const [userLocation, setUserLocation] = useState(null)

  const markerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [25, 33]
  })

  const map = useMapEvents({
    locationFound(event) {
      locationFound(event.latlng)
      setUserLocation(event.latlng)
      map.flyTo(event.latlng, defaultZoom)
    }
  })

  useEffect(() => {
    if (flyToUserLocationTrigger !== 0) map.locate()
  }, [flyToUserLocationTrigger])

  return userLocation === null ? null : (
    <Marker position={userLocation} icon={markerIcon}>
      <Popup>
        <span className="text-headline-950 font-sans text-sm font-normal">Usted está aquí...</span>
      </Popup>
    </Marker>
  )
}

UserLocation.propTypes = {
  flyToUserLocationTrigger: PropTypes.number.isRequired,
  locationFound: PropTypes.func.isRequired,
  defaultZoom: PropTypes.number.isRequired
}

export { UserLocation }
