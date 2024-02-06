'use Client'

import { LogoLetter } from "../../components/Logo/LogoLetter"
import { randomImage } from "../../util/random-image"

const LoginPage: React.FC = () => {

    let illustration = randomImage()

    return (
        <body>
            <div className="flex justify-center items-center h-screen w-screen bg-zinc-900 overflow-hidden">
                <aside className="h-full w-[60%] flex justify-center items-center">
                    <div className="h-full w-full flex justify-center items-center overflow-hidden">
                        <img className="h-[100%] object-cover" src={illustration} alt="" />
                    </div>
                </aside>

                <main className="h-full w-[40%] flex justify-center items-center text-white">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <LogoLetter/>
                        
                        <div id="form-login" className="flex flex-col">
                            <form className="flex flex-col gap-2" action="" method="post">
                                <div className="flex flex-col">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" name="password" id="password" />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-full bg-white text-black">
                                    <button type="submit">Entrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </body>
    )
}

export default LoginPage