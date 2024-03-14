import axios from "axios"
import { JAVO_API_URL } from "../../util/constants"

export const getUsersByEquipe = async (id_equipe: string) => {

    const integrantes = await axios.get(`${JAVO_API_URL}equipes/${id_equipe}/users`).then((response)=> {
        return response.data
    })

    return integrantes
}