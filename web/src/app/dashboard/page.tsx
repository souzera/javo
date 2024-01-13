'use client'

import EquipeSelectButton from "@/components/Equipes/EquipeSelectButton";
import { sample } from "@/types/equipe";
import { Provider, useDispatch, useSelector } from "react-redux";

import { toggleEquipe } from "@/redux/equipe/actions";
import { DragableListChamado } from "@/components/Chamados/DragableListChamado";
import store from "@/redux/store";

const DashboardPage: React.FC = () => {

    return (
        <>
            <Provider store={store}>
                <body className="flex flex-col overflow-hidden">
                    <section className="flex min-h-[90vh] overflow-hidden">
                        <aside className="w-[30%] bg-zinc-950">
                            <div className="container flex flex-col  h-full p-8 overflow-y-auto">
                                <span>*LOGO*</span>
                                Equipes
                                <div>
                                    {sample.map((equipe) => {
                                        return (
                                            <EquipeSelectButton id={equipe.id} nome={equipe.nome} />
                                        )
                                    })}
                                </div>
                            </div>
                        </aside>
                        <main className="w-[70%] bg-zinc-900 overflow-auto">
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

