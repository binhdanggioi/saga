import { call, put } from "redux-saga/effects";
import { setUser } from "../../toolkit/userSlice";
import { requestGetUser } from "../request/users";

export function* handleGetUser() {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        localStorage.setItem('data',JSON.stringify(response.data));
        yield put(setUser({ ...data }));
    } catch (error) {
        console.log(error);
    }
}

export  function* handleUserLogin({payload}) {
    try{
        const {email, password} = payload;
        const res = yield call(requestGetUser);

        const dataLog = res.data;
        const resultPassword = dataLog.map(data => data.password);
        const resultEmail = dataLog.map(data => data.email);

        const currentPassword = resultPassword.includes(password);
        const currentEmail = resultEmail.includes(email);

        if(currentEmail && currentPassword){
            alert('login success');
        }else {
            alert('email or password not correct');
        }
    }catch (error) {
        console.log(error);
    }
}