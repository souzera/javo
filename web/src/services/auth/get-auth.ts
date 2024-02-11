import axios from "axios"
import { JAVO_API_URL } from "../../util/constants"

export async function getAuth(username: string, password: string){

    const tokens = await axios(
        {
            method: "POST",
            url: `${JAVO_API_URL}token/pair`,
            data: {
                username: username,
                password: password
            },

        }
    ).then((response) => {return response.data})

    return tokens
}