import { Modal } from "antd";
import { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useSelector } from "react-redux"
import { getStorageAuth } from "../../util/storage";
import TicketForm from "../Form/TicketForm";
import { getUsersByEquipe } from "../../services/equipe/get-users-by-equipe";

const CriarTicketButton: React.FC = () => {

    const { currentEquipe } = useSelector((state: any) => state.equipeReducer)

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        getUsersByEquipe(currentEquipe).then((response) => {
            setIntegrantes(response);
        })
    }, [currentEquipe])

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
                <TicketForm integrantes={integrantes} currentEquipe={currentEquipe}/>
            </Modal>
        </>
    )
}

export default CriarTicketButton