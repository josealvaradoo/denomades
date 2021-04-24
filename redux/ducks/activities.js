import { createDuck } from 'redux-duck'
import { createStructuredSelector } from 'reselect'

const duck = createDuck('app/activities')

// Define initial state
const initialState = []

// Define local constants
export const SET_ACTIVITIES = duck.defineType('SET_ACTIVITIES')

// Define constans used by redux saga
export const FETCH_ACTIVITIES = duck.defineType('FETCH_ACTIVITIES')

// Define actions
export const actions = ({
  set: duck.createAction(SET_ACTIVITIES),
  fetch: duck.createAction(FETCH_ACTIVITIES),
})

// Define selector
export const selector = createStructuredSelector({
  activities: (state) => state.activities,
})

// Define reducer
export default duck.createReducer({
  [SET_ACTIVITIES]: (state, { payload }) => payload,
}, initialState)
