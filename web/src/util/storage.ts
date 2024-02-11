import { AuthProps } from "../components/Form/LoginForm"

export const storageAuth = (data:AuthProps) => {
    localStorage.setItem("auth", JSON.stringify(data))
}

export const getStorageAuth = () => {
    return JSON.parse(localStorage.getItem("auth") || '{}')
}

export const removeStorageAuth = () => {
    localStorage.removeItem("auth")
}