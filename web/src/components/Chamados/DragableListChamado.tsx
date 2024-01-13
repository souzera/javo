

import { useState } from "react"
import { Chamado, sample } from "@/types/chamado"
import ChamadoContainer from "./ChamadoContainer"

export function DragableListChamado() {

    const [chamados, setChamados] = useState<Chamado[]>(sample)

    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                {chamados.map((chamado) => {
                    return (
                        <ChamadoContainer chamado={chamado} />
                    )
                })}
            </div>
        </>
    )
}