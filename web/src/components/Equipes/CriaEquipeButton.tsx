export function CriarEquipeButton() {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 text-lg font-bold text-white rounded-full border-white border-2 transition ease-in-out hover:scale-105"
      >
        <i className="fa-solid fa-circle-plus text-white"></i>
        <span>Criar Equipe</span>
      </button>
    </>
  )
}