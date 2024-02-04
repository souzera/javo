import { Usuario } from "../../types/usuario";
import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null
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