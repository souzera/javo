import { Chamado } from "@/types/chamado"
import Draggable from "react-draggable";

interface ChamadoContainerProps {
    chamado: Chamado
}

export default function ChamadoContainer({ chamado }: ChamadoContainerProps) {

    let stylePrioridade = "px-4 rounded-2xl text-white font-bold stroke-[13vw] stroke-white"
    let styleContainer = "flex flex-col flex-1 cursor-pointer text-white text-ellipsis p-4 gap-2 rounded-2xl transition ease-in-out duration-1000 hover:scale-105 overflow-hidden border-2"

    let styleStatus = "h-4 w-4 rounded-full"

    switch (chamado.prioridade.toLowerCase()) {
        case "alta":
            stylePrioridade += " bg-red-500"
            break;
        case "média":
            stylePrioridade += " bg-yellow-500"
            break;
        case "baixa":
            stylePrioridade += " bg-gray-700"
            break;
        default:
            stylePrioridade += " bg-gray-700"
            break;
    }

    switch (chamado.status.toLowerCase()) {
        case "aberto":
            styleStatus += " bg-blue-700"
            break;
        case "em andamento":
            styleStatus += " bg-yellow-700"
            break;
        case "fechado":
            styleStatus += " bg-orange-700"
            break;
        case "concluido":
            styleStatus += " bg-green-700"
            break;
        case "cancelado":
            styleStatus += " bg-red-700"
            break;
        default:
            styleStatus += " bg-blue-700"
            break;
    }

    return (
        <>
            <Draggable>
                <div className={styleContainer}>
                    <div className="flex justify-start items-center gap-2 border py-1 pl-2 rounded-full">
                        <div className={styleStatus} />
                        <span className="">{chamado.status}</span>
                    </div>
                    <h1 className="text-2xl font-bold">{chamado.titulo}</h1>
                    {chamado.descricao && <h3 className="">{chamado.descricao}</h3>}
                    <div className="flex justify-between">
                        <span className="font-bold" onClick={() => { console.log('abrir perfil do usuario') }}>{chamado.usuario}</span>
                        <span className={stylePrioridade}>{chamado.prioridade}</span>
                    </div>
                </div>
            </Draggable>
        </>
    )

}

//TODO: dragable list