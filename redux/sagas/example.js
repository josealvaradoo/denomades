import { call, put, takeLatest } from 'redux-saga/effects'
import { SET_EXAMPLE, actions as ExampleActions } from '../ducks/example'

export function* fetchExample() {
  try {
    const examples = yield call()
    yield put(ExampleActions.set(examples))
  } catch (error) {
    // eslint-disable-next-line
    console.log(error.message)
  }
}

function* saga() {
  yield takeLatest(SET_EXAMPLE, fetchExample)
}

export default saga
