import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAuth } from "../../services/auth/get-auth"
import { getUsuarioByUsername } from "../../services/usuario/get_usuarios"
import { Usuario } from "../../types/usuario"
import { storageAuth } from "../../util/storage"

export interface AuthProps {
    access: string,
    refresh: string,
    currentUser: Usuario
}

const LoginForm: React.FC = () => {

    const [ loginForm, setLoginForm ] = useState({
        username: "",
        password: "",
        remember: false
    })

    const handleLogin = async () => {

        await getAuth(loginForm.username, loginForm.password)
        .then(async (response) => {
            if (response.access !== null ){
                await getUsuarioByUsername(loginForm.username).then((usuario) => {
                    storageAuth({ access: response.access, refresh: response.refresh, currentUser: usuario })
                    window.location.href = '/dashboard'
                })
            }
        })
        .catch((error) => {
            return error
        })

    }
    
    return (
        <>
            <form className="flex flex-col gap-2 justify-start" action="">
                <input className="py-2 px-4 rounded-xl text-black font-normal" type="text" placeholder="username" name="username" onChange={(event) => {
                    setLoginForm({ ...loginForm, username: event.target.value })
                }
                } />
                <input className="py-2 px-4 rounded-xl text-black font-normal" type="password" placeholder="senha" name="password" onChange={(event) => {
                    setLoginForm({ ...loginForm, password: event.target.value })
                }
                } />
                <div className="flex justify-evenly">
                    <input className="cursor-pointer" type="checkbox" name="" id="remember" onChange={(event) => {
                        setLoginForm({ ...loginForm, remember: event.target.checked })
                    }} />
                    <span>Manter-se conectado</span>
                </div>
                <button className="bg-zinc-900 border-white border-2 rounded-full px-4 py-2 transition ease-in-out duration-300 hover:scale-110"
                    onClick={handleLogin}
                    type="button">Entrar</button>
            </form>
        </>
    )
}

export default LoginForm