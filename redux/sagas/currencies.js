import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_CURRENCIES, actions as CurrencyActions } from '@ducks/currencies'
import CurrencyService from '@services/currency-service'
import CurrencyHelper from '@helpers/currencies'

export function* fetchAll() {
  try {
    const Service = new CurrencyService()
    const currencies = yield call(Service.getAll.bind(Service))
    yield put(CurrencyActions.set(CurrencyHelper.transformObjectToArray(currencies?.data)))
  } catch (error) {
    console.log(error.message)
  }
}

function* saga() {
  yield takeLatest(FETCH_CURRENCIES, fetchAll)
}

export default saga
