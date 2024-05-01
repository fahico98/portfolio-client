import { Leaflet } from "@/components/experiments/Leaflet/Leaflet.jsx"
import { Coinranking } from "@/components/experiments/Coinranking/Coinranking.jsx"
import { Cloudinary } from "@/components/experiments/Cloudinary/Cloudinary.jsx"
import { Experiment } from "@/views/Experiment/Experiment.jsx"
import { Error404 } from "@/views/Error404/Error404.jsx"
import { Home } from "@/views/Home/Home.jsx"
import { Root } from "@/router/Root.jsx"

function Routes() {
  return [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/experimento",
          element: <Experiment />,
          children: [
            {
              path: "/experimento/cloudinary",
              element: <Cloudinary />
            },
            {
              path: "/experimento/coinranking",
              element: <Coinranking />
            },
            {
              path: "/experimento/leaflet",
              element: <Leaflet />
            }
          ]
        }
      ]
    }
  ]
}

export { Routes }
