class CartHelper {}

CartHelper.getTotal = (items, currencies) => {
  const active = currencies?.active

  const total = items?.reduce((value, item) => {
    const current = item?.currency
    const pair = `${current}${active}`
    const factor = currencies?.exchange?.find((e) => e.name === pair)

    if (active === current || !factor) {
      return Number(value + item?.price)
    }

    return Number(value + Number(item?.price * factor?.value))
  }, 0)

  return `${active} $${Number(total).toFixed(2)}`
}

export default CartHelper
