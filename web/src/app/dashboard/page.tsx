'use client'

import { useState } from "react";

const DashboardPage: React.FC = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false)

    console.log(toggleSidebar)

    return (
        <>
            <body className="flex flex-col">
                <section className="flex min-h-[90vh]">
                    <aside className="w-[30%]">
                        <div className="container flex flex-col bg-zinc-950 h-full p-8">
                            <span>*LOGO*</span>
                            Equipes
                            <div>
                                <ol className="flex flex-col gap-1">
                                    <li className="bg-green-400">time zé da faca</li>
                                    <li className="bg-green-400">time zé da fava</li>
                                    <li className="bg-green-400">time zé da farra</li>
                                    <li className="bg-green-400">time zé da farda</li>
                                    <li className="bg-green-400">time zé da fada</li>
                                </ol>
                            </div>
                        </div>
                    </aside>
                    <main className="w-[70%]">
                        <div className="bg-green-500 h-full p-8">
                            tarefas
                            <div className="flex flex-col gap-2">
                                <div className="bg-green-400">tarefa 1</div>
                                <div className="bg-green-400">tarefa 2</div>
                                <div className="bg-green-400">tarefa 3</div>
                                <div className="bg-green-400">tarefa 4</div>
                                <div className="bg-green-400">tarefa 5</div>
                            </div>
                        </div>
                    </main>
                </section>

                <section className="bg-zinc-900 flex flex-1 justify-center items-center">
                    <footer className="flex justify-center items-center h-[10vh] text-zinc-600">
                        <span>JaVo © Copyright 2024</span>
                    </footer>
                </section>
            </body>
        </>
    )
}

export default DashboardPage