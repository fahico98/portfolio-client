import { useAdvancedMarkerRef, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps"
import styles from "@/components/experiments/GoogleMaps/MarkerWithInfoWindow.module.css"
import PropTypes from "prop-types"

function MarkerWithInfoWindow({ place }) {
  /**
   * `markerRef` and `marker` are needed to establish the connection between the marker and infowindow (if you're using the Marker component, you can use the
   * `useMarkerRef` hook instead).
   */
  const [markerRef, marker] = useAdvancedMarkerRef()

  return (
    <>
      <AdvancedMarker ref={markerRef} position={place.location}>
        <div className="w-4 h-4 rounded-full border-2 border-white" style={{ background: place.iconBackgroundColor }} />
      </AdvancedMarker>
      <InfoWindow anchor={marker} headerDisabled={true}>
        <div className={styles.infoWindowContent}>
          <p style={{ fontSize: "12px" }} className="text-xs">
            {place.displayName}
          </p>
          <div className="flex justify-center items-center rounded-full h-5 w-5 shrink-0" style={{ backgroundColor: place.iconBackgroundColor }}>
            <img src={place.svgIconMaskURI} className="w-3.5 h-3.5" alt="" />
          </div>
        </div>
      </InfoWindow>
    </>
  )
}

MarkerWithInfoWindow.propTypes = { place: PropTypes.object }

export { MarkerWithInfoWindow }
