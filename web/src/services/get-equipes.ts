import { Equipe } from "../types/equipe";
import { JAVO_API_URL } from "../util/constants";
import axios from "axios";

export async function getEquipesByUser(id_profile: string) {
    const equipes = axios.get('http://127.0.0.1:8000/v1/api/usuarios/4e572c01-1a6b-4883-a9a8-4cec2fc859a8/equipes').then((response) => {
        console.log(response.data)
        return response.data
    });

    return equipes;
}