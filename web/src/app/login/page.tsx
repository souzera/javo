'use client'

import { useState } from "react";

import { Provider } from "react-redux";
import { LogoLetter } from "../../components/Logo/LogoLetter"
import { randomImage } from "../../util/random-image"
import { FaGoogle } from "react-icons/fa";
import LoginForm from "../../components/Form/LoginForm";
import store from "../../redux/store";

const LoginPage: React.FC = () => {

    const [illustration] = useState(randomImage())


    return (
        <body>
            <div className="flex justify-center items-center h-screen w-screen bg-zinc-900 overflow-hidden">
                <aside className="h-full w-[60%] flex justify-center items-center">
                    <div className="h-full w-full flex justify-center items-center overflow-hidden ">
                        <img className="h-[100%] object-cover" src={illustration.url} alt={illustration.alt} />
                    </div>
                </aside>

                <main className="h-full w-[40%] flex justify-center items-center text-white">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="h-16">
                            <LogoLetter />
                        </div>

                        <div id="form-login" className="flex flex-col gap-4">

                            <p>Entre com seu usuário e senha</p>
                            <button className="flex justify-center items-center gap-4 bg-zinc-900 border-white border-2 rounded-full px-4 py-2 transition ease-in-out duration-300 hover:scale-110">
                                <FaGoogle />
                                <span>Logar com Google</span>
                            </button>
                            <hr />

                            <Provider store={store}>
                                <LoginForm />
                            </Provider>

                            <div className="flex flex-col items-center text-sm underline text-zinc-600">
                                <a className="transition duration-500 hover:text-white" href="">Esqueceu a Senha?</a>
                                <a className="transition duration-500 hover:text-white" href="">Cadastrar-se</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </body>
    )
}

export default LoginPage