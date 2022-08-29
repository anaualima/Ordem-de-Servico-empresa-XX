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
  // Row,
  // Col,
} from "reactstrap";
import Header from '../../components/header/Header';

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
    if (logged.message?.includes("inválidos")) {
      alert('Email ou senha inválidos');
    } else {
      localStorage.setItem('user', JSON.stringify(logged));
      navigate('/list');
    }
  };

  return (
    <div className="container-login">
      <Header />
      <div className="container-duo">
        <div className="first-div">
          <div className="title-div">
            <h1>Organizador</h1>
            <h2>Soluções para seu negócio</h2>
          </div>
        </div>
        <div className="second-div">
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
        </div>
      </div>
    </div >
  )
}

export default Login;