import Draggable from "react-draggable";
import { Call } from "../../types/call";
import { getStatusName } from "../../services/status/get-status";
import { getUsuarioById } from "../../services/usuario/get_usuarios";
import { Usuario } from "../../types/usuario";
import { use, useEffect, useState } from "react";
import { getPrioridadeDescricao } from "../../services/prioridade/get-prioridade";

interface ChamadoContainerProps {
    chamado: Call
}

export default function ChamadoContainer({ chamado }: ChamadoContainerProps) {

    let stylePrioridade = "px-4 rounded-2xl text-white font-bold stroke-[13vw] stroke-white"
    let styleContainer = "flex flex-col w-[28%] h-auto cursor-pointer text-white text-ellipsis p-4 gap-2 rounded-2xl transition ease-in-out duration-1000 hover:scale-105 overflow-hidden border-2 bg-zinc-900"

    let styleStatus = "h-4 w-4 rounded-full"

    let statusName = getStatusName(chamado.status)
    let prioridadeName = getPrioridadeDescricao(chamado.prioridade)

    const [userOrigin, setUserOrigin] = useState<Usuario>({id_profile: "", user: "undefined", url_avatar: ""}) 
    useEffect(() => {
        getUsuarioById(chamado.criado_por).then((response) => {
            setUserOrigin(response)
        })
    },[])

    switch (prioridadeName.toLowerCase()) {
        case "urgente":
            stylePrioridade += " bg-red-700"
            break;
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

    switch (statusName.toLowerCase()) {
        case "pendente":
            styleStatus += " bg-blue-700"
            break;
        case "em andamento":
            styleStatus += " bg-yellow-700"
            break;
        case "fechado":
            styleStatus += " bg-orange-700"
            break;
        case "finalizado":
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
                        <span className="">{statusName}</span>
                    </div>
                    <h1 className="text-2xl font-bold">{chamado.titulo}</h1>
                    {chamado.desc && <h3 className="">{chamado.desc}</h3>}
                    <div className="flex justify-between gap-2">
                        <span className="font-thin" onClick={() => { console.log('abrir perfil do usuario') }}>{userOrigin?.user}</span>
                        <span className={stylePrioridade}>{prioridadeName}</span>
                    </div>
                </div>
            </Draggable>
        </>
    )

}

//TODO: dragable list