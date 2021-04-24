import { all } from 'redux-saga/effects'
import activities from './sagas/activities'
import currencies from './sagas/currencies'

export default function* sagas() {
  return yield all([
    activities(),
    currencies(),
  ])
}
