import { AuthProps } from "../components/Form/LoginForm"

const isStorageAuth = () => {
    if (localStorage.getItem("auth")) {return true}
    return false
}

export const storageAuth = (data:AuthProps) => {
    localStorage.setItem("auth", JSON.stringify(data))
}

export const getStorageAuth = () => {
    if (!isStorageAuth()) {console.log('usuario não autenticado');return {}}
    return JSON.parse(localStorage.getItem("auth") || '{}')
}

export const removeStorageAuth = () => {
    localStorage.removeItem("auth")
}