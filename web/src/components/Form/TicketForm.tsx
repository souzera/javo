import { Button, Form, Input, Select, SelectProps } from "antd";
import { prioridadeMapper } from "../../services/prioridade/get-prioridade";

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

  return (
    <div>
      <h1 className="text-2xl font-bold">Criar Ticket</h1>
      <hr className="my-2"/>
      <Form>
        <Form.Item name="titulo" required>
          <Input placeholder="Titulo*" />
        </Form.Item>

        <Form.Item name="descricao">
          <TextArea placeholder="Descrição" rows={4} />
        </Form.Item>

        <Form.Item>
          <Select placeholder="Prioridade" options={prioridadeOptions} />
        </Form.Item>

        <Form.Item>
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


        <Form.Item>
            <Button type="primary" htmlType="submit">Enviar</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TicketForm;
