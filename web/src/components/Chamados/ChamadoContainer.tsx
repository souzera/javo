import { Chamado } from "@/types/chamado"
import Draggable from "react-draggable";

interface ChamadoContainerProps {
    chamado: Chamado
}

export default function ChamadoContainer({ chamado }: ChamadoContainerProps) {

    let color = "px-4 rounded-2xl text-white font-bold stroke-[13vw] stroke-white"

    switch (chamado.prioridade.toLowerCase()) {
        case "alta":
            color += " bg-red-500"
            break;
        case "média":
            color += " bg-yellow-500"
            break;
        case "baixa":
            color += " bg-gray-700"
            break;
        default:
            color += " bg-gray-700"
            break;
    }

    return (
        <>
            <Draggable>
                <div className="flex flex-col flex-1 cursor-pointer bg-zinc-800 text-white text-ellipsis p-4 gap-2 rounded-2xl transition ease-in-out duration-1000 hover:scale-105">
                    <h1 className="text-2xl font-bold">{chamado.titulo}</h1>
                    {chamado.descricao && <h3 className="">{chamado.descricao}</h3>}
                    <div className="flex justify-between">
                        <span className="font-bold" onClick={() => { console.log('abrir perfil do usuario') }}>{chamado.usuario}</span>
                        <span className={color}>{chamado.prioridade}</span>
                    </div>
                </div>
            </Draggable>
        </>
    )

}

//TODO: dragable list