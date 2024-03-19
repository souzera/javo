import { toggleEquipe } from "../../redux/equipe/actions";
import { useDispatch } from "react-redux";

import default_icon from '../../assets/SVG/default_icon.svg'

interface EquipeSelectButtonProps {
  id: string;
  nome: string;
  avatar?: string|undefined;
}

export function EquipeSelectButton(props: EquipeSelectButtonProps) {

  const dispatch = useDispatch()

  const handleToggleEquipe = (id_equipe: any) => {
    dispatch(toggleEquipe(id_equipe))
  }

  return (
    <>
      <div onClick={() => handleToggleEquipe(props.id)} className=" flex justify-start items-center bg-zinc-900 rounded-full transition ease-in-out duration-1000 hover:scale-105 cursor-pointer my-2">

        {props.avatar ? <img className="mx-4 w-[2.5rem] rounded-full" src={props.avatar} alt="" /> : <img className="mx-4 w-[2.5rem] rounded-full" src={default_icon.src} alt="" />}
        
        <h1 className="font-bold text-xl text-white my-2 p-2 pl-4 truncate">{props.nome}</h1>
      </div>
    </>
  )
}