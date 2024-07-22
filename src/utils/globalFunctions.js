/**
 * Generates an array containing a range of numbers.
 *
 * @param start
 * @param end
 * @param step
 * @return {*[]}
 */
export function range(start, end, step = 1) {
  let output = []
  for (let i = start; i <= end; i += step) {
    output.push(i)
  }
  return output
}

export function phraseTitleCase(str) {
  str = str.toLowerCase().split(" ")
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(" ")
}

export function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatCompactNumber(number) {
  if (number < 0) return "-" + formatCompactNumber(-1 * number)
  if (number < 1_000_000) return number
  else if (number >= 1_000_000 && number < 1_000_000_000) return (number / 1_000_000).toFixed(2).replace(/\.0$/, "") + " Millios"
  else if (number >= 1_000_000_000 && number < 1_000_000_000_000) return (number / 1_000_000_000).toFixed(2).replace(/\.0$/, "") + " Billios"
  else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) return (number / 1_000_000_000_000).toFixed(2).replace(/\.0$/, "") + " Trillios"
}

export function formatCurrency(value, currency = "") {
  let options = currency ? { style: "currency", currency } : { style: "decimal" }
  let USDollarFormatter = new Intl.NumberFormat("en-US", options)
  return USDollarFormatter.format(value)
}
