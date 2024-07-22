import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect } from "react"
import eventBus from "@/libs/mitt.js"
import PropTypes from "prop-types"

function GooglePlacesService({ searchByTextTrigger, searchString }) {
  const placesLibrary = useMapsLibrary("places")
  // const apiIsLoaded = useApiIsLoaded()
  const map = useMap()

  async function searchByText() {
    if (searchString) {
      await placesLibrary.Place.searchByText({
        locationRestriction: map.getBounds(),
        fields: ["displayName", "location", "svgIconMaskURI", "iconBackgroundColor"],
        textQuery: searchString,
        language: "es-419",
        region: "CO"
      })
        .then(results => {
          if (results) eventBus.emit("google-maps.search-by-text", results)
        })
        .catch(error => {
          console.log({ error })
        })
    }
  }

  useEffect(() => {
    if (searchByTextTrigger) searchByText()
  }, [searchByTextTrigger])
}

GooglePlacesService.propTypes = {
  searchByTextTrigger: PropTypes.number.isRequired,
  searchString: PropTypes.string.isRequired
}

export { GooglePlacesService }
