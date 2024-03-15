'use client'

import { useEffect, useState } from "react";

import { Equipe, defaultEquipes } from "../../types/equipe";
import { Usuario, defaultUsuario } from "../../types/usuario";

import { Provider, useSelector } from "react-redux";
import store from "../../redux/store";

import { EquipeSelectButton } from "../../components/Equipes/EquipeSelectButton";
import { DragableListChamado } from "../../components/Chamados/DragableListChamado";
import { CriarEquipeButton } from "../../components/Equipes/CriaEquipeButton";
import { LogoLetter } from "../../components/Logo/LogoLetter";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { getEquipesByUser } from "../../services/equipe/get-equipes";
import { MdArrowDropDownCircle } from "react-icons/md";
import { getStorageAuth, removeStorageAuth } from "../../util/storage";
import CriarTicketButton from "../../components/Chamados/CriarTicketButton";



const DashboardPage: React.FC = () => {

    const auth = getStorageAuth()
    const [currentUser, setCurrentUser] = useState<Usuario>(auth.currentUser || defaultUsuario)
    const [currentEquipes, setCurrentEquipes] = useState<Equipe[]>(defaultEquipes)

    useEffect(() => {
        if (currentUser) {
            console.log('currentUser logado')
            getEquipesByUser(currentUser.id_profile).then((response) => {
                setCurrentEquipes(response)
            })
        }else{console.log('currentUser não está logado')}
    }, [])

    const logout = () => {
        removeStorageAuth()
        window.location.href = '/login'
    }

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
            label: <div onClick={logout}>Sair</div>,
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
                            <div className="flex justify-end items-center p-4 gap-4 -z-40 bg-transparent">
                                <div className="w-full p-2">
                                    <div className="flex">
                                        <CriarTicketButton />
                                    </div>
                                </div>

                                <div className="text-white flex flex-col justify-end items-center">
                                    <span className="font-semibold text-lg ">
                                        {currentUser.user}
                                    </span>
                                    <Dropdown menu={{ items }} trigger={['click']} className="font-thin text-xs flex justify-end items-center cursor-pointer">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Settings
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

