import styles from "@/components/experiments/Coinranking/Sparkline/Sparkline.module.css"
import { range } from "@/utils/globalFunctions.js"
import PropTypes from "prop-types"
import { useEffect } from "react"
import Chart from "chart.js/auto"

function Sparkline({ sparklineData = [], index }) {
  const CANVAS_CONTAINER_ID = "sparkline-canvas-container"
  const CANVAS_ID = "sparkline-canvas"

  useEffect(() => {
    let canvasContainer = document.querySelector(`#${CANVAS_CONTAINER_ID}-${index}`)
    let canvas = document.createElement("canvas")
    canvas.setAttribute("id", `${CANVAS_ID}-${index}`)
    canvasContainer.appendChild(canvas)

    let config = {
      type: "line",
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      },
      data: {
        labels: range(0, sparklineData.length - 1),
        datasets: [
          {
            label: "",
            data: sparklineData.map(data => parseFloat(data)),
            backgroundColor: "#0000ff",
            borderColor: "#0000ff",
            pointRadius: 0,
            borderWidth: 1,
            fill: true
          }
        ]
      }
    }

    new Chart(canvas, config)

    return () => {
      document.querySelector(`#${CANVAS_ID}-${index}`).remove()
    }
  }, [sparklineData])

  return <div id={`${CANVAS_CONTAINER_ID}-${index}`} className={styles.sparkline} />
}

Sparkline.propTypes = {
  sparklineData: PropTypes.array,
  index: PropTypes.number.isRequired
}

export { Sparkline }
