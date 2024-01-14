

import { useEffect, useState } from "react"
import { Chamado, sample } from "@/types/chamado"
import ChamadoContainer from "./ChamadoContainer"
import { useSelector } from "react-redux"

export function DragableListChamado() {

    
    const [chamados, setChamados] = useState<Chamado[]>([])

    const { currentEquipe } = useSelector((state: any) => state.equipeReducer)

    //TODO: Criar um endpoint para buscar os chamados de uma equipe
    useEffect(()=>{
        console.log(currentEquipe)
        setChamados(sample.filter(chamado => chamado.id_equipe === currentEquipe))
    },[currentEquipe])

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