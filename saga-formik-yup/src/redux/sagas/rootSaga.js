import { takeLatest } from "redux-saga/effects";
import {handleGetUser, handleUserLogin, handleUserRegister} from "./handlers/users";
import { getUser,userLogin,userRegister } from "../toolkit/userSlice";

export function* rootSaga() {
    yield takeLatest(getUser.type, handleGetUser);
    yield takeLatest(userLogin.type, handleUserLogin);
    yield takeLatest(userRegister.type,handleUserRegister);
}
