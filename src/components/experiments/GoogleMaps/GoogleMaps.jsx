import { MarkerWithInfoWindow } from "@/components/experiments/GoogleMaps/MarkerWithInfoWindow.jsx"
import { GooglePlacesService } from "@/components/experiments/GoogleMaps/GooglePlacesService.jsx"
import { APIProvider, Map } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"
import eventBus from "@/libs/mitt.js"

export function GoogleMaps() {
  const INITIAL_MAP_LOCATION = { lat: 4.6913629, lng: -74.1244543 }
  const INITIAL_MAP_ZOOM = 14

  const [searchByTextTrigger, setSearchByTextTrigger] = useState(0)
  const [searchString, setSearchString] = useState("")
  const [isLoading] = useState(false)
  const [places, setPlaces] = useState([])

  function handleFormSubmit(event) {
    event.preventDefault()
    setSearchByTextTrigger(searchByTextTrigger + 1)
  }

  function onSearchByText(event) {
    setPlaces(event.places)
  }

  useEffect(() => {
    eventBus.on("google-maps.search-by-text", onSearchByText)
    return () => eventBus.off("google-maps.search-by-text")
  }, [])

  return (
    <div className="w-full flex flex-col gap-y-4 my-5 sm:my-10">
      <div className="flex flex-col xs:flex-row gap-y-2 xs:gap-y-0 justify-between items-end w-full gap-x-2">
        <form className="flex items-end xs:grow sm:grow-0 w-full sm:w-1/2 gap-x-2" onSubmit={handleFormSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="string-to-search" className="label-sm sm:label-md label-headline w-fit mb-1 ml-2">
              Busqueda
            </label>
            <input type="text" id="string-to-search" className="input-sm sm:input-md input-high" onInput={event => setSearchString(event.target.value)} />
          </div>
          <button type="submit" className="btn-sm sm:btn-md btn-high">
            {isLoading ? "Cargando..." : "Buscar"}
          </button>
        </form>
        <div className="flex items-end justify-end shrink-0 w-full xs:w-auto sm:w-1/2">
          <button type="button" className="btn-sm sm:btn-md btn-transparent-high w-full sm:w-auto" onClick={() => setPlaces([])}>
            Limpiar mapa
          </button>
        </div>
      </div>
      <div className="w-full h-full flex gap-x-4">
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} className="w-full h-full">
          <div className="w-full h-full">
            <Map
              mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
              className="w-full h-[400px] sm:h-[650px]"
              defaultCenter={INITIAL_MAP_LOCATION}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              defaultZoom={INITIAL_MAP_ZOOM}
            >
              {places.map((place, index) => (
                <MarkerWithInfoWindow place={place} key={index} />
              ))}
            </Map>
          </div>
          <GooglePlacesService searchByTextTrigger={searchByTextTrigger} searchString={searchString} />
        </APIProvider>
      </div>
    </div>
  )
}
