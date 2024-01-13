import EquipeActionTypes from "./action-types";

const initialstate = {
    currentEquipe: null,
}

const equipeReducer = (state = initialstate, action:any) =>{
    switch(action.type){
        case EquipeActionTypes.TOGGLE_EQUIPE:
            return {... state, currentEquipe: action.payload}
        default:
            return state;
    }
}

export default equipeReducer;