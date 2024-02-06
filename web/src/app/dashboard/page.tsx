'use client'

import { useEffect, useState } from "react";

import { Equipe, defaultEquipes } from "../../types/equipe";
import { Usuario, defaultUsuario } from "../../types/usuario";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { EquipeSelectButton } from "../../components/Equipes/EquipeSelectButton";
import { DragableListChamado } from "../../components/Chamados/DragableListChamado";
import { CriarEquipeButton } from "../../components/Equipes/CriaEquipeButton";
import { LogoLetter } from "../../components/Logo/LogoLetter";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { getEquipesByUser } from "../../services/equipe/get-equipes";
import { MdArrowDropDownCircle } from "react-icons/md";



const DashboardPage: React.FC = () => {

    const [currentUser, setCurrentUser] = useState<Usuario>(defaultUsuario)

    //const {currentUser} = useSelector((state: any)=> state.userReducer)

    const [currentEquipes, setCurrentEquipes] = useState<Equipe[]>(defaultEquipes)

    useEffect(() => {
        if (currentUser) {
            getEquipesByUser(currentUser.id_profile).then((response) => {
                setCurrentEquipes(response)
            })
        }
    }, [])

    const items: MenuProps['items'] = [
        {
            label: <a href="https://www.antgroup.com">Editar Perfil</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">Alterar Senha</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <div onClick={() => { console.log("Saindo ...") }}>Sair</div>,
            key: '3',
        },
    ];

    return (
        <>
            <Provider store={store}>
                <body className="flex flex-col overflow-hidden">
                    <section className="flex min-h-[90vh] overflow-hidden">
                        <aside className="w-[30%] bg-zinc-950">
                            <div className="container flex flex-col  h-full p-8 overflow-y-auto">
                                <div className="mb-4 p-8">
                                    <LogoLetter />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <CriarEquipeButton />
                                    <div>
                                        {currentEquipes?.map((equipe) => {
                                            return <EquipeSelectButton key={null} id={equipe.id_equipe} nome={equipe.nome} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <main className="w-[70%] bg-zinc-900">
                            <div className="flex justify-end p-4 gap-4">
                                <div className="text-white flex flex-col justify-end">
                                    <span className="font-semibold text-lg">
                                        {currentUser.user}
                                    </span>
                                    <Dropdown menu={{ items }} trigger={['click']} className="font-thin text-xs flex justify-end items-center cursor-pointer">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                settings
                                                <MdArrowDropDownCircle />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <Avatar size="large" src={currentUser.url_avatar} />
                            </div>
                            <div className="h-full p-8 overflow-auto">
                                <DragableListChamado />
                            </div>
                        </main>
                    </section>

                    <section className="bg-zinc-800 flex flex-1 justify-center items-center">
                        <footer className="flex justify-center items-center h-[10vh] text-zinc-600">
                            <span>JaVo © Copyright 2024</span>
                        </footer>
                    </section>
                </body>
            </Provider>
        </>
    )
}

export default DashboardPage

