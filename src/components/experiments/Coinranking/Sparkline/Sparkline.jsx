import styles from "@/components/experiments/Coinranking/Sparkline/Sparkline.module.css"
import { range } from "@/utils/globalFunctions.js"
import PropTypes from "prop-types"
import { useEffect } from "react"
import Chart from "chart.js/auto"

function Sparkline({ sparklineData = [], index, change }) {
  const CANVAS_CONTAINER_ID = "sparkline-canvas-container"
  const CANVAS_ID = "sparkline-canvas"

  useEffect(() => {
    let canvasContainer = document.querySelector(`#${CANVAS_CONTAINER_ID}-${index}`)
    let canvas = document.createElement("canvas")
    canvas.setAttribute("id", `${CANVAS_ID}-${index}`)
    canvasContainer.appendChild(canvas)

    let context = canvas.getContext("2d")
    let gradientMainColor = parseFloat(change) >= 0 ? "rgba(22, 163, 74, 0.5)" : "rgba(200, 38, 38, 0.5)"
    let lineColor = parseFloat(change) >= 0 ? "#16a34a" : "#dc2626"
    let gradient = context.createLinearGradient(0, 0, 0, 45)

    gradient.addColorStop(1, "rgba(255,255,255,0)")
    gradient.addColorStop(0, gradientMainColor)

    let config = {
      type: "line",
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
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
            backgroundColor: gradient,
            borderColor: lineColor,
            pointRadius: 0,
            borderWidth: 1,
            fill: true
          }
        ]
      }
    }

    new Chart(canvas, config)

    return () => {
      let sparkline = document.querySelector(`#${CANVAS_ID}-${index}`)
      if (sparkline) sparkline.remove()
    }
  }, [sparklineData])

  return (
    <div id={styles.sparkline}>
      <p className={parseFloat(change) >= 0 ? "text-green-600" : "text-red-600"}>
        {parseFloat(change) > 0 && "+"}
        {change}%
      </p>
      <div id={`${CANVAS_CONTAINER_ID}-${index}`} className={styles.canvasContainer} />
    </div>
  )
}

Sparkline.propTypes = {
  sparklineData: PropTypes.array,
  index: PropTypes.number.isRequired,
  change: PropTypes.string.isRequired
}

export { Sparkline }
