import { HiPlusCircle } from "react-icons/hi";

export function CriarEquipeButton() {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-bold text-white rounded-full border-white border-2 transition ease-in-out duration-1000 hover:scale-105 w-full"
      >
        <HiPlusCircle size={24}/>
        <span>Criar Equipe</span>
      </button>
    </>
  )
}