import { Modal } from "antd";
import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useSelector } from "react-redux"
import { getStorageAuth } from "../../util/storage";
import TicketForm from "../Form/TicketForm";

const CriarTicketButton: React.FC = () => {

    const { currentEquipe } = useSelector((state: any) => state.equipeReducer)

    const auth = getStorageAuth()

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
            {currentEquipe &&
                <div>
                    <div className="flex justify-center items-center gap-3 text-white font-bold rounded-full px-4 py-2 border-2 border-white transition ease-in-out duration-700 hover:scale-105 cursor-pointer" onClick={showModal}>
                        <HiPlusCircle size={24} />
                        <span className="text-xl">Criar ticket</span>
                    </div>
                </div>
            }

            <Modal open={modalIsOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <TicketForm/>
            </Modal>
        </>
    )
}

export default CriarTicketButton