import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

import Modal from "react-modal"

export function CriarEquipeButton() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  }

  const handleOk = () => {
    setModalIsOpen(false);
  }

  const handleCancel = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-bold text-white rounded-full border-white border-2 transition ease-in-out duration-1000 hover:scale-105 w-full"
      >
        <HiPlusCircle size={24} />
        <span>Criar Equipe</span>
      </button>
      <Modal>

      </Modal>
    </>

  )
}