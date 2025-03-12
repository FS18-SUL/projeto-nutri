import { Button, Drawer, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { API } from "../../services";

const Users = () => {

    const [visibleCreate, setVisibleCreate] = useState(false);
    const [formCreate] = Form.useForm();

    const [messageApi, contextHolder] = message.useMessage();
    const warning = (mensagem) => {
        messageApi.warning(mensagem);
    };
    const success = (mensagem) => {
        messageApi.success(mensagem);
    };

    async function listarUsuarios() {
        const request = await API.get("/usuarios");
        const response = await request;
        console.log(response.data);
    }

    async function criarUsuario(dados) {
        const request = await API.post("/usuarios", dados);
        const response = await request;

        if (response.status == 201) {
            setVisibleCreate(false);
            success(`Usuário ${response.statusText}`);
        }
    }

    useEffect(() => {
        listarUsuarios();
    }, [])

    return (
        <>
            {contextHolder}
            <h1 className="flex justify-between items-center">
                usuários
                <Button
                    type="primary"
                    onClick={() => setVisibleCreate(true)}
                >
                    Novo usuário
                </Button>
            </h1>

            {/* A Table vem aqui */}
            

            <Drawer
                open={visibleCreate}
                onClose={() => setVisibleCreate(false)}
                title="Cadastrar"
            >
                <Form
                    layout="vertical"
                    form={formCreate}
                    onFinish={criarUsuario}
                >
                    <Form.Item
                        name="usuario_nome"
                        label="Nome"
                        rules={[
                            {
                                required: true,
                                message: "O nome é obrigatório!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="usuario_email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "O email é obrigatório!"
                            },
                        ]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        name="usuario_senha"
                        label="Senha"
                        rules={[
                            {
                                required: true,
                                message: "A senha é obrigatória!"
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Criar
                    </Button>
                </Form>

            </Drawer>
        </>
    );
}

export default Users;