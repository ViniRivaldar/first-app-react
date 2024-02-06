import React, { useState, useRef} from "react";
import axios from "axios";
import People from "../../assets/people .png";
import Arrow from "../../assets/seta1.png";
import { useNavigate } from "react-router-dom"

import H1 from "../../components/title";
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import {
  Container,
  Imagem,
  InputLabel,
  Input,
} from "./style";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
   
    setUsers([...users, newUser]);

    navigate('/usuarios')
  }

  return (
    <Container>
      <Imagem alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      
      </ContainerItens>
    </Container>
  );
}

export default Home;
