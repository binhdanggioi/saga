import { call, put } from "redux-saga/effects";
import { setUser } from "../../toolkit/userSlice";
import { requestGetUser } from "../request/users";

export function* handleGetUser({payload}) {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        console.log(response[0].password);
        localStorage.setItem('data',JSON.stringify(response.data));
        //lưu data vào localstorage và kiểm tra user có trong mảng k?
        //nếu có thì redirect
        yield put(setUser({ ...data }));
    } catch (error) {
        console.log(error);
    }
}

export  function* handleUserLogin({payload}) {
    try{
        const {email, password} = payload;
        console.log({email,password});
        const res = yield call(requestGetUser);
        const { data } = res;
        for(let i = 0;i< res.data.length;i++) {
            console.log("data1", res.data[i].password);
            if(password === res.data[i].password){

            }else {
                console.log('error');
            }
        }
    }catch (error) {
        console.log(error);
    }
}
