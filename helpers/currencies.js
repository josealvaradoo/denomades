class CurrencyHelper {}

CurrencyHelper.transformObjectToArray = (currencies) => {
  if (typeof currencies !== 'object') return []

  const keys = Object.keys(currencies)

  return keys.reduce((array, item) => array.concat({
    name: item,
    value: currencies?.[item],
  }), [])
}

CurrencyHelper.setLocalCurrency = (currency, currencies) => {
  const active = currencies?.active
  const current = currency?.currency
  const pair = `${current}${active}`
  const factor = currencies?.exchange?.find((e) => e.name === pair)

  if (active === current || !factor) {
    return `${currency?.currency} $${currency?.price}`
  }

  return `${active} $${Number(currency?.price * factor?.value).toFixed(2)}`
}

export default CurrencyHelper
