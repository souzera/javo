import { Button, Form, Input, Select, SelectProps } from "antd";
import { IoTicket } from 'react-icons/io5'
import { prioridadeMapper } from "../../services/prioridade/get-prioridade";
import { Call } from "../../types/call";
import { JAVO_API_URL } from "../../util/constants";
import { getStorageAuth } from "../../util/storage";
import { statusMapper } from "../../services/status/get-status";
import axios from "axios";

const { TextArea } = Input;

interface IntegranteProps {
  user: string;
  url_avatar: string;
  id_profile: string;
}

interface TicketFormProps {
  integrantes: IntegranteProps[];
  currentEquipe: string;
}

function TicketForm(props: TicketFormProps) {
  const prioridadeOptions: SelectProps["options"] = [];
  const integrantesOptions: SelectProps["options"] = [];

  const { currentUser } = getStorageAuth();

  prioridadeMapper.forEach((prioridade) => {
    prioridadeOptions.push({
      label: prioridade.descricao,
      value: prioridade.id,
    });
  });

  props.integrantes.forEach((integrante) => {
    integrantesOptions.push({
      label: integrante.user,
      value: integrante.id_profile,
      img: integrante.url_avatar,
    });
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    const ticket: Call = {
      titulo: values.titulo,
      status: statusMapper[0].id,
      desc: values.descricao,
      prioridade: values.prioridade,
      id_equipe: props.currentEquipe,
      criado_por: currentUser.id_profile,
      criado_para: values.criado_para,
    };

    const form = new FormData();

    form.append("titulo", ticket.titulo);
    form.append("status", ticket.status);
    form.append("desc", ticket.desc);
    form.append("prioridade", ticket.prioridade);
    form.append("id_equipe", ticket.id_equipe);
    form.append("criado_por", ticket.criado_por);
    form.append("criado_para", ticket.criado_para);

    axios({
      method: "post",
      url: `${JAVO_API_URL}calls/`,
      data: form,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        console.log("Ticket criado com sucesso.");
        console.log("TODO: recarregar a lista de tickets.");
      }
    });
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <IoTicket className="text-2xl" />
        <h1 className="text-2xl font-bold">Criar Ticket</h1>
      </div>
      <hr className="my-2" />
      <Form
        preserve={false}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <Form.Item
          name="titulo"
          rules={[
            {
              required: true,
              message: "Por favor, insira um título",
            },
          ]}
        >
          <Input placeholder="Titulo*" />
        </Form.Item>

        <Form.Item name="descricao">
          <TextArea placeholder="Descrição" rows={4} />
        </Form.Item>

        <Form.Item name="prioridade" required>
          <Select
            defaultValue={prioridadeOptions[0].value}
            placeholder="Prioridade"
            options={prioridadeOptions}
          />
        </Form.Item>

        <Form.Item name="criado_para">
          <Select
            size="large"
            optionRender={(integrante) => {
              console.log(integrante);
              return (
                <>
                  <div className="flex justify-start gap-3 mx-2 items-center">
                    <img
                      className="rounded-full"
                      src={integrante.data.img}
                      alt="foto de perfil"
                      width={48}
                      height={48}
                    />
                    <span>{integrante.label}</span>
                  </div>
                </>
              );
            }}
            options={integrantesOptions}
            placeholder="Para"
          />
        </Form.Item>

        <Form.Item className="flex justify-end">
          <Button
            className="border-2 border-black font-bold rounded-full hover:scale-110"
            htmlType="submit"
          >
            Criar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TicketForm;
