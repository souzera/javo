import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

import { Button, Form, Input, Modal } from "antd"
import { RiTeamFill } from "react-icons/ri";
import { defaultUsuario } from "../../types/usuario";
import EquipeForm from "../Form/EquipeForm";

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
        onClick={showModal}
        type="button"
        className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-bold text-white rounded-full border-white border-2 transition ease-in-out duration-1000 hover:scale-105 w-full"
      >
        <HiPlusCircle size={24} />
        <span>Criar Equipe</span>
      </button>


      <Modal open={modalIsOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <EquipeForm isOpen={setModalIsOpen}/>
      </Modal>
    </>

  )
}