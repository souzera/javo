

import { useEffect, useState } from "react"
import { Call} from "../../types/call"
import ChamadoContainer from "./ChamadoContainer"
import { useSelector } from "react-redux"
import { getCallsByEquipe } from "../../services/call/get-calls"

export function DragableListChamado() {

    
    const [chamados, setChamados] = useState<Call[]>([])

    const { currentEquipe } = useSelector((state: any) => state.equipeReducer)

    useEffect(()=>{
        getCallsByEquipe(currentEquipe).then((response)=>{
            console.log(response)
            setChamados(response)
        })
    },[currentEquipe])

    return (
        <>
            <div className="grid grid-cols-3 gap-4 auto-cols-auto">
                {chamados.map((chamado) => {
                    return (
                        <ChamadoContainer chamado={chamado} />
                    )
                })}
            </div>
        </>
    )
}