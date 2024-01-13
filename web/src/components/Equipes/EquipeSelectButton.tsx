import { toggleEquipe } from "@/redux/equipe/actions";
import { Equipe } from "@/types/equipe";
import { useDispatch, useSelector } from "react-redux";

export default function EquipeSelectButton(props: Equipe) {

  const dispatch = useDispatch()

  const handleToggleEquipe = (id_equipe: any) => {
    dispatch(toggleEquipe(id_equipe))
  }

  return (
    <>
      <div onClick={() => handleToggleEquipe(props.id)} className="bg-zinc-900 rounded-full transition ease-in-out duration-1000 hover:scale-105 cursor-pointer">
        <h1 className="font-bold text-xl text-white my-2 p-2 pl-4 ">{props.nome}</h1>
      </div>
    </>
  )
}