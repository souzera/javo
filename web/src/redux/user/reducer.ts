import { Usuario } from "../../types/usuario";
import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
    access_token: null,
    refresh_token: null
}

const userReducer = (state = initialState, action:any) => {
    switch(action.type){
        case UserActionTypes.LOGIN:
            return {... state, currentUser: action.payload}
        default:
            return state;
    }
}

export default userReducer;