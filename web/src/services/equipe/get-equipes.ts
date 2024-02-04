import { JAVO_API_URL } from "../../util/constants";
import axios from "axios";

export async function getEquipesByUser(id_profile: string) {
    const equipes = axios.get(`${JAVO_API_URL}usuarios/${id_profile}/equipes`)
    .then((response) => {
        console.log(response.data)
        return response.data
    });

    return equipes;
}