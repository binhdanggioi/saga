// import {put, takeLates, call} from 'redux-saga/effects';
// import action from '../actions';
// import actionAtc from '../reducers'
//
// function* getRecordId({payload}) {
//     console.log(payload);
//     try {
//         yield put(actionAtc.getGameSuccess(payload));
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// export default function* tournamentClubResultSaga() {
//     yield takeLatest(action.getGame, getRecordId);
// }

import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-21&sortBy=publishedAt&apiKey=df861cbe5f0b466996fff1ac1b60072e')
        .then(response => response.json(), );
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}