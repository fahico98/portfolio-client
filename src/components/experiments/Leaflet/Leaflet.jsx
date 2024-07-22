import { UserLocation } from "@/components/experiments/Leaflet/UserLocation/UserLocation.jsx"
import styles from "@/components/experiments/Leaflet/Leaflet.module.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import locationIcon from "@/assets/images/location_icon.png"
import { useState } from "react"
import L from "leaflet"

function Leaflet() {
  const DEFAULT_ZOOM = 14
  const THUNDERFOREST_API_KEY = import.meta.env.VITE_THUNDERFOREST_API_KEY
  const LAYERS = [
    {
      label: "OpenStreetMap - Por defecto",
      value: "open-street-map-default",
      component: (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )
    },
    {
      label: "Thunderforest - OpenCycleMap",
      value: "thunderforest-open-cycle-map",
      component: (
        <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`}
          apikey={THUNDERFOREST_API_KEY}
          maxZoom={22}
        />
      )
    },
    {
      label: "Thunderforest - Transporte",
      value: "thunderforest-transport",
      component: (
        <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`}
          apikey={THUNDERFOREST_API_KEY}
          maxZoom={22}
        />
      )
    },
    {
      label: "Thunderforest - Paisaje",
      value: "thunderforest-landscape",
      component: (
        <TileLayer
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`}
          apikey={THUNDERFOREST_API_KEY}
          maxZoom={22}
        />
      )
    },
    {
      label: "Stadia - Stamen Watercolor",
      value: "stadia-stamen-watercolor",
      component: (
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a>
          &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
          maxZoom={16}
          minZoom={1}
          ext="jpg"
        />
      )
    },
    {
      label: "Esri - Satelite",
      value: "esri-world-image-gallery",
      component: (
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      )
    },
    {
      label: "OpenTopoMap",
      value: "open-topo-map",
      component: (
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> |
          Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
      )
    }
  ]

  const [location, setLocation] = useState({ lat: 4.6976438, lng: -74.1422808 })
  const [flyToUserLocationTrigger, setFlyToUserLocationTrigger] = useState(0)
  const [layerSelected, setLayerSelected] = useState(LAYERS[0])
  const [userLocation, setUserLocation] = useState(null)

  const markerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [25, 33]
  })

  function handleLayerChange(layerName) {
    setLayerSelected(LAYERS.filter(layer => layer.value === layerName)[0])
  }

  function triggerUserLocation() {
    setFlyToUserLocationTrigger(flyToUserLocationTrigger + 1)
  }

  function locationFound(location) {
    setLocation(null)
    setUserLocation(location)
  }

  return (
    <div id={styles.leaflet}>
      <div>
        <div>
          <label htmlFor="layer-selector" className="label-md label-headline w-fit mb-1 ml-2">
            Capa
          </label>
          <select id="layer-selector" className="input-high input-md w-80" onChange={event => handleLayerChange(event.target.value)}>
            {LAYERS.map((layer, index) => (
              <option key={index} value={layer.value}>
                {layer.label}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn-md btn-high" onClick={triggerUserLocation}>
          Ir a mi ubicación
        </button>
      </div>
      <MapContainer center={location} zoom={DEFAULT_ZOOM} scrollWheelZoom={true} className={styles.mapContainer} zoomControl={false}>
        {layerSelected.component}
        {location && (
          <Marker position={location} icon={markerIcon}>
            <Popup>
              <span className="text-headline-950 font-sans text-sm font-normal">Aeropuerto internacional El Dorado</span>
            </Popup>
          </Marker>
        )}
        <UserLocation
          className={userLocation ? "" : "hidden"}
          flyToUserLocationTrigger={flyToUserLocationTrigger}
          locationFound={locationFound}
          defaultZoom={DEFAULT_ZOOM}
        />
      </MapContainer>
    </div>
  )
}

export { Leaflet }
