import { createDuck } from 'redux-duck'
import { createStructuredSelector } from 'reselect'

const duck = createDuck('app/cart')

// Define initial state
const initialState = {
  items: [],
  total: 0,
}

// Define local constants
export const ADD_TO_CART = duck.defineType('ADD_TO_CART')
export const REMOVE_FROM_CART = duck.defineType('REMOVE_FROM_CART')

// Define actions
export const actions = ({
  add: duck.createAction(ADD_TO_CART),
  remove: duck.createAction(REMOVE_FROM_CART),
})

// Define selector
export const selector = createStructuredSelector({
  cart: (state) => state.cart,
})

// Define reducer
export default duck.createReducer({
  [ADD_TO_CART]: (state, { payload }) => ({
    ...state,
    items: state.items.concat(payload),
    total: Number(state.total + payload.price),
  }),
  [REMOVE_FROM_CART]: (state, { payload }) => ({
    ...state,
    items: state.items.filter((item) => item?.id !== payload?.id),
    total: Number(state.total - payload.price),
  }),
}, initialState)
