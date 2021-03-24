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

        const currentPassword = resultPassword.filter(rs => rs.password === password);
        const currentEmail = resultEmail.filter(rs => rs.email === email);

        if(currentEmail && currentPassword){
            console.log(111);
            localStorage.setItem('tk', email);
            localStorage.setItem('mk', password);
        }else {
            alert('error');
        }
    }catch (error) {
        console.log(error);
    }
}
