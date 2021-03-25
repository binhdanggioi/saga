import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            fullname: "",
            email: "",
            password: "",
            c_password: "",
        },
    ],
};

const userSlice = createSlice({
    name: "user",
    initialState: {initialState},
    reducers: {
        getUser: () => {},

        setUser: (state, action) => {
            const userData = action.payload;
            return {
                ...state,
                ...userData
            };
        },

        userLogin: (state, action) => {
            const userLogin = action.payload;
            return{
                ...state,
                ...userLogin
            }
        },

        userRegister: (state, action) => {
            const user = action.payload;
            return {
                ...state,
                user,
            };

        }
    }
});

export const { getUser, setUser, userLogin, userRegister } = userSlice.actions;

export default userSlice.reducer;
