import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ACTIVITIES, actions as ActivityActions } from '@ducks/activities'
import ActivityService from '@services/activity-service'

export function* fetchAll() {
  try {
    const Service = new ActivityService()
    const activities = yield call(Service.getAll.bind(Service))
    yield put(ActivityActions.set(activities?.data || []))
  } catch (error) {
    // eslint-disable-next-line
    console.log(error.message)
  }
}

function* saga() {
  yield takeLatest(FETCH_ACTIVITIES, fetchAll)
}

export default saga
