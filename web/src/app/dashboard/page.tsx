'use client'

import EquipeSelectButton from "@/components/Equipes/EquipeSelectButton";
import { Equipe, sample } from "@/types/equipe";
import { Provider } from "react-redux";

import { DragableListChamado } from "@/components/Chamados/DragableListChamado";
import store from "@/redux/store";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CriarEquipeButton } from "@/components/Equipes/CriaEquipeButton";

const DashboardPage: React.FC = () => {


    const { user } = useUser();

    const [equipes, setEquipes] = useState<Equipe[]>([])

    useEffect(() => {
        if (user){
            setEquipes(sample.filter(equipe => equipe.usuarios.includes(user.id)))
        } 
    }, [user])

    return (
        <>
            <Provider store={store}>
                <body className="flex flex-col overflow-hidden">
                    <section className="flex min-h-[90vh] overflow-hidden">
                        <aside className="w-[30%] bg-zinc-950">
                            <div className="container flex flex-col  h-full p-8 overflow-y-auto">
                                <span>*LOGO*</span>
                                <CriarEquipeButton/>
                                <div>
                                    {equipes.map((equipe) => {
                                        return (
                                            <EquipeSelectButton id={equipe.id} nome={equipe.nome}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </aside>
                        <main className="w-[70%] bg-zinc-900 overflow-auto">
                            <div className="flex justify-end p-4">
                                <UserButton />
                            </div>
                            <div className="h-full p-8">
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

