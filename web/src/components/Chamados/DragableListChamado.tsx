

import { useEffect, useState } from "react"
import { Call} from "../../types/call"
import ChamadoContainer from "./ChamadoContainer"
import { useSelector } from "react-redux"
import { getCallsByEquipe } from "../../services/call/get-calls"
import { Flex } from "antd"

export function DragableListChamado() {

    const [chamados, setChamados] = useState<Call[]>([])
    
    const { currentEquipe } = useSelector((state: any) => state.equipeReducer)

    useEffect(()=>{
        if (currentEquipe){
            getCallsByEquipe(currentEquipe).then((response)=>{
                setChamados(response)
            })
        }
    },[currentEquipe])

    return (
        <>
            <Flex
                wrap="wrap" gap='small'
            >
                {chamados.map((chamado) => {
                    return (
                        <ChamadoContainer chamado={chamado} />
                    )
                })}
            </Flex>
        </>
    )
}