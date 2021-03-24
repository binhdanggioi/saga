import { takeLatest } from "redux-saga/effects";
import {handleGetUser, handleUserLogin} from "./handlers/users";
import { getUser,userLogin } from "../toolkit/userSlice";

export function* rootSaga() {
    yield takeLatest(getUser.type, handleGetUser);

    yield takeLatest(userLogin.type, handleUserLogin);
}
