import React, { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import { useNavigate } from 'react-router-dom';
import './login.css'
import {
  Label,
  Form,
  Input,
  Button,
  FormGroup,
  Row,
  Col,
} from "reactstrap";

function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const postApi = async (data) => {
    const response = await fetchAPI('post', 'http://localhost:3001/login', data);
    return response;
  };

  const handleEnter = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      senha: senha,
    };
    const logged = await postApi(data);
    localStorage.setItem('user', JSON.stringify(logged));
    navigate('/list');
  };

  return (
    <div className="container-login">
      <div className="container-buttons">
        <Row>
          <Col>
            <Button
              className="button-cadastro"
            >
              Cadastrar cliente
            </Button>
          </Col>
          <Col>
            <Button
              className="button-cadastro"
            >
              Cadastrar colaborador
            </Button>
          </Col>
        </Row>
      </div>
      <Form className="form-login">
        <h1>Faça seu login</h1>
        <FormGroup>
          <Label
            htmlFor="email"
          >
            email:
          </Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)} />
        </FormGroup>
        <FormGroup>
          <Label
            htmlFor="senha"
          >
            senha:
          </Label>
          <Input
            type="text"
            id="senha"
            value={senha}
            onChange={({ target }) => setSenha(target.value)} />
        </FormGroup>
        <Button
          type="submit"
          className="button"
          onClick={(e) => handleEnter(e)}
        >
          Login
        </Button>
      </Form>
    </div >
  )
}

export default Login;