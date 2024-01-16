import { toggleEquipe } from "@/redux/equipe/actions";
import { useDispatch } from "react-redux";

//EQUIPE PROPS
interface EquipeSelectButtonProps {
  id: string;
  nome: string;
}

export default function EquipeSelectButton({id, nome}: EquipeSelectButtonProps) {

  const dispatch = useDispatch()

  const handleToggleEquipe = (id_equipe: any) => {
    dispatch(toggleEquipe(id_equipe))
  }

  return (
    <>
      <div onClick={() => handleToggleEquipe(id)} className="bg-zinc-900 rounded-full transition ease-in-out duration-1000 hover:scale-105 cursor-pointer">
        <h1 className="font-bold text-xl text-white my-2 p-2 pl-4 truncate">{nome}</h1>
      </div>
    </>
  )
}