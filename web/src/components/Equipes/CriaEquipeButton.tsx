import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

import { Button, Form, Input, Modal } from "antd"
import { RiTeamFill } from "react-icons/ri";
import addEquipe from "@/services/add-equipe";
import { Equipe, sampleEquipes } from "@/types/equipe";
import { useUser } from "@clerk/nextjs";
import { sampleUsers } from "@/types/usuario";

export function CriarEquipeButton() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user } = useUser();

  const [novaEquipe, setNovaEquipe] = useState<Equipe>({id:(sampleEquipes.length+1).toString(), nome:""});

  const showModal = () => {
    setModalIsOpen(true);
  }

  const handleOk = () => {
    addEquipe(novaEquipe);
    if (user) {sampleUsers.find((u) => u.id === user.id)?.equipes.push(novaEquipe)
    sampleUsers.find((u) => console.log(u))}
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
      <Modal title="Basic Modal" open={modalIsOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form 
          layout="vertical"
          onFinish={handleOk}
          onChange={(values:any)=>{
            setNovaEquipe({...novaEquipe, nome:values.target.value})
          }}>
          <Form.Item
            rules={[{ required: true, message: 'Por favor, insira o nome da equipe!' }]}
            name={"nome"}
          >
            <Input placeholder="Nome da Equipe" prefix={<RiTeamFill size={32} color={"#e5e5e5"} />} />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-end">
              <Button htmlType="submit" className="border-2 border-black rounded-full">Criar Equipe</Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>

  )
}