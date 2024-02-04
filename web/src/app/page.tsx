import { LogoLetter } from "../components/Logo/LogoLetter";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      
      {/* Header */}
      <header className="flex justify-around bg-zinc-950 h-[10vh] p-4">
        <div className="container mx-auto">
          <LogoLetter />
        </div>
        <div>
          <Link href={"/dashboard"} className="bg-zinc-900 text-white py-2 px-4 rounded-full hover:bg-zinc-600 focus:outline-none focus:shadow-outline-blue active:bg-zinc-800 font-semibold">
            Entrar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center container mx-auto mt-8 mb-5">
        {/* Call to Action Section */}
        <section className="bg-zinc-900 w-[80vw] p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Melhore seu Suporte Técnico com JaVo</h2>
          <p className="text-gray-600">Solução eficiente para gerenciar chamados de suporte e melhorar a comunicação com os usuários.</p>
          <button className="mt-4 bg-zinc-500 text-white py-2 px-4 rounded-full hover:bg-zinc-600 focus:outline-none focus:shadow-outline-blue active:bg-zinc-800">
            Comece Agora
          </button>
        </section>

        {/* Features Section */}
        <section className="mt-8 w-[80vw]">
          <h2 className="text-2xl font-bold mb-4">Recursos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="border-white border p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Criação de Tickets</h3>
              <p className="text-gray-600">Os usuários podem criar tickets facilmente para relatar problemas ou fazer solicitações.</p>
            </div>

            {/* Feature Card 2 */}
            <div className="border-white border p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Acompanhamento de Status</h3>
              <p className="text-gray-600">Mantenha os usuários informados sobre o status de seus tickets em tempo real.</p>
            </div>

            {/* Feature Card 3 */}
            <div className="border-white border p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Comunicação Eficiente</h3>
              <p className="text-gray-600">Mensagens instantâneas entre usuários e agentes para uma comunicação rápida e eficaz.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-700 p-4 text-center">
        <p>&copy; 2024 JaVo App. Todos os direitos reservados.</p>
      </footer>
    </div>
  </>)
}
