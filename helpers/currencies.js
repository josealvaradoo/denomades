class CurrencyHelper {}

CurrencyHelper.transformObjectToArray = (currencies) => {
  if (typeof currencies !== 'object') return []

  const keys = Object.keys(currencies)

  return keys.reduce((array, item) => array.concat({
    [item]: currencies?.[item],
  }), [])
}

export default CurrencyHelper
