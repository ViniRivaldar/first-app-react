import React, { useState, useEffect } from "react";
import axios from "axios";
import avatar from "../../assets/people1.png";
import Arrow from "../../assets/seta.png";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

import H1 from "../../components/title";
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";
import { Container, Imagem, User } from "./style";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPages() {
    navigate("/");
  }

  return (
    <Container>
      <Imagem alt="logo-imagem" src={avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="excluir" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPages}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
