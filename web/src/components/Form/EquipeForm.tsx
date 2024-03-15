import { Button, Form, Input } from "antd";
import { FaUserGroup } from "react-icons/fa6";
import { getStorageAuth } from "../../util/storage";
import axios from "axios";
import { JAVO_API_URL } from "../../util/constants";

const { TextArea } = Input;

interface EquipeFormProps {
  isOpen: any;
}

function EquipeForm(props: EquipeFormProps) {
  const { currentUser } = getStorageAuth();

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    console.log(values);

    const equipe = {
      nome: values.nome,
      desc: values.desc,
      id_profile: currentUser.id_profile,
      icon_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Circulo_branco.png/600px-Circulo_branco.png",
    };

    console.log(equipe);

    //TODO: Criar metodo pra fazer isso
    const form = new FormData();

    form.append("nome", equipe.nome);
    form.append("desc", equipe.desc);
    form.append("id_profile", equipe.id_profile);
    form.append("icon_url", equipe.icon_url);

    axios({
      method: "post",
      url: `${JAVO_API_URL}equipes/`,
      data: form,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <FaUserGroup className="text-2xl" />
        <h1 className="text-2xl font-bold">Criar Equipe</h1>
      </div>
      <hr className="my-2" />
      <Form
        preserve={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="nome"
          rules={[{ required: true, message: "Digite o nome da equipe" }]}
        >
          <Input placeholder="Equipe" />
        </Form.Item>

        <Form.Item name="desc">
          <TextArea placeholder="Descrição" />
        </Form.Item>

        <Form.Item className="flex justify-end items-center">
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

export default EquipeForm;
