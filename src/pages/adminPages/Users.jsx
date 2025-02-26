import { Button, Drawer } from "antd";
import { useState } from "react";

const Users = () => {

    const [visibleCreate, setVisibleCreate] = useState(false);
    
    return (
        <>
            <h1 className="flex justify-between items-center">
                usuários
                <Button
                    type="primary"
                    onClick={() => setVisibleCreate(true)}
                >
                    Novo usuário
                </Button>
            </h1>



            <Drawer
                open={visibleCreate}
                onClose={() => setVisibleCreate(false)}
                title="Cadastrar"
            >
                alguma coisa
            </Drawer>
        </>
    );
}

export default Users;