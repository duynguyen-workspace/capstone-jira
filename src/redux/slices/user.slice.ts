import { createSlice } from "@reduxjs/toolkit";
import { CurrentUser } from "../../types/user.type";
import { getLocalStorage } from "../../utils/helpers";
import { CURRENT_USER } from "../../utils/constants";

const userLocal = getLocalStorage<CurrentUser | null>(CURRENT_USER)

interface StateType {
    currentUser: typeof userLocal;
}

const initialState: StateType = {
    currentUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
        },
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice;