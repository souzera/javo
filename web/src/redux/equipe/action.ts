import EquipeActionTypes from "./action-types";

//id da equipe
export const toggleEquipe = (payload:any) => ({
    type: EquipeActionTypes.TOGGLE_EQUIPE,
    payload
})