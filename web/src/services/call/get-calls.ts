import axios from 'axios'
import { JAVO_API_URL } from '../../util/constants'

export async function getCallsByEquipe(id_equipe:string){
    const calls = axios.get(`${JAVO_API_URL}equipes/${id_equipe}/calls`).then((response) => { return response.data })

    return calls
}