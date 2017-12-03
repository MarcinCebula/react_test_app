import { all } from 'redux-saga/effects';
import contactSagas from './contacts/saga';

export default function* rootSaga(getState) {
  yield all([
    contactSagas(),
  ]);
}
