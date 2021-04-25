import { createDuck } from 'redux-duck'
import { createStructuredSelector } from 'reselect'

const duck = createDuck('app/currencies')

// Define initial state
const initialState = {
  active: 'CLP',
  exchange: [],
}

// Define local constants
export const SET_CURRENCIES = duck.defineType('SET_CURRENCIES')
export const SET_ACTIVE_CURRENCY = duck.defineType('SET_ACTIVE_CURRENCY')

// Define constans used by redux saga
export const FETCH_CURRENCIES = duck.defineType('FETCH_CURRENCIES')

// Define actions
export const actions = ({
  set: duck.createAction(SET_CURRENCIES),
  fetch: duck.createAction(FETCH_CURRENCIES),
  active: duck.createAction(SET_ACTIVE_CURRENCY),
})

// Define selector
export const selector = createStructuredSelector({
  currencies: (state) => state.currencies,
})

// Define reducer
export default duck.createReducer({
  [SET_CURRENCIES]: (state, { payload }) => ({
    ...state,
    exchange: payload,
  }),
  [SET_ACTIVE_CURRENCY]: (state, { payload }) => ({
    ...state,
    active: payload,
  }),
}, initialState)
