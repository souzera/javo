import { Usuario } from "../../types/usuario";
import { JAVO_API_URL } from "../../util/constants";
import axios from "axios";

export function getUsuarioById(id_profile: string) {
    const usuario: Promise<Usuario> = axios.get(`${JAVO_API_URL}usuarios/${id_profile}`).then((response) => { return response.data })

    return usuario
}