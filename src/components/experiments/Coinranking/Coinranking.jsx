import { Sparkline } from "@/components/experiments/Coinranking/Sparkline/Sparkline.jsx"
import { formatCurrency, formatCompactNumber } from "@/utils/globalFunctions.js"
import styles from "@/components/experiments/Coinranking/Coinranking.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Coinranking() {
  const COINRANKING_BASE_URL = "https://api.coinranking.com/v2"
  const COINRANKING_API_KEY = import.meta.env.VITE_COINRANKING_API_KEY
  const COINRANKING_URL_ARGUMENTS = "?orderBy=marketCap&limit=50"
  const REFRESH_TIME = 60

  const [coins, setCoins] = useState([])
  const [counter, setCounter] = useState(REFRESH_TIME)
  const [isLoading, setIsLoading] = useState(false)

  function priceFormatter(price) {
    return `$ ${formatCurrency(parseInt(price), "USD").slice(1)}`
  }

  function marketCapFormatter(marketCap) {
    return `$ ${formatCompactNumber(parseInt(marketCap))}`
  }

  async function fetchCoinrankingData() {
    setIsLoading(true)

    let url = `${COINRANKING_BASE_URL}/coins${COINRANKING_URL_ARGUMENTS}`
    let headers = {
      "Content-Type": "application/json",
      "X-My-Custom-Header": COINRANKING_API_KEY,
      "Access-Control-Allow-Origin": "*"
    }

    await axios.get(url, { headers }).then(response => setCoins(response.data.data.coins))

    setIsLoading(false)
  }

  useEffect(() => {
    async function counterEffect() {
      if (counter === 0) await fetchCoinrankingData()
    }

    counterEffect()
  }, [counter])

  useEffect(() => {
    async function initialFetch() {
      await fetchCoinrankingData()
    }

    initialFetch()

    const timeInterval = setInterval(() => setCounter(current => (current === 0 ? REFRESH_TIME : current - 1)), 1000)
    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div id={styles.coinranking}>
      <div>
        <p className="hidden sm:block">Todos los valores están en dólares estadounidenses.</p>
        <p>{isLoading || counter === 0 ? "Cargando..." : `Próxima actualización en ${counter}`}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Moneda</th>
            <th>Precio</th>
            <th>Capitalización de mercado</th>
            <th>24 Horas</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>
                <div>
                  <img src={coin.iconUrl} alt={coin.name} />
                  <div>
                    <p className="hidden sm:block">{coin.name}</p>
                    <p>{coin.symbol}</p>
                  </div>
                </div>
              </td>
              <td>{priceFormatter(coin.price)}</td>
              <td>{marketCapFormatter(coin.marketCap)}</td>
              <td>
                <Sparkline sparklineData={coin.sparkline} index={index} change={coin.change} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Coinranking }
