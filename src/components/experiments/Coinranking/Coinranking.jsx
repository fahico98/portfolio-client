import { Sparkline } from "@/components/experiments/Coinranking/Sparkline/Sparkline.jsx"
import styles from "@/components/experiments/Coinranking/Coinranking.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Coinranking() {
  const [coins, setCoins] = useState([])

  const COINRANKING_BASE_URL = "https://api.coinranking.com/v2"
  const COINRANKING_API_KEY = import.meta.env.VITE_COINRANKING_API_KEY

  useEffect(() => {
    async function fetchCoinrankingData() {
      let response = await axios
        .get(`${COINRANKING_BASE_URL}/coins`, {
          headers: {
            "Content-Type": "application/json",
            "X-My-Custom-Header": COINRANKING_API_KEY,
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          // console.log(response.data.data.coins)
          setCoins(response.data.data.coins)
        })
    }

    fetchCoinrankingData()
  }, [])

  return (
    <div id={styles.coinranking}>
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
          {coins.map((coin, index) => {
            return (
              <tr key={index}>
                <td>
                  {coin.name}&nbsp;({coin.symbol})
                </td>
                <td>{coin.price}</td>
                <td>{coin.marketCap}</td>
                <td>
                  <Sparkline sparklineData={coin.sparkline} index={index} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { Coinranking }
