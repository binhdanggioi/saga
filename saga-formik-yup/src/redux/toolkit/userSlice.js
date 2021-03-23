import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [
        {
            email: "test@test.com",
            password: "111111",
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
    }
});

export const { getUser, setUser, userLogin } = userSlice.actions;

export default userSlice.reducer;
