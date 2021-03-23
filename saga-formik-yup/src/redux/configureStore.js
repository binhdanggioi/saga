import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import userReducer from "./toolkit/userSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userReducer
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export default store;
