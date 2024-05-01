import styles from "@/components/experiments/OpenWeatherMap/Leaflet.module.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import { useEffect } from "react"

function Leaflet() {
  useEffect(() => {}, [])

  return (
      <div id={styles.leaflet}>

      </div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export { Leaflet }