import React from 'react';
import { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import { useNavigate } from 'react-router-dom';
import './orders.css';
import {
  Col,
  Row,
  Label,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

function Orders({ isOpen, toggle }) {

  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idColaborador, setIdColaborador] = useState("");
  const navigate = useNavigate();

  const postApi = async (body) => {
    const response = await fetchAPI('post', 'http://localhost:3001/order', body);
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      data: data,
      descricao: descricao,
      clientId: idCliente,
      collaboratorId: idColaborador,
    };
    await postApi(body);
    navigate('/list');
  }

  return (
    <div className="container-orders">
      <Form className="form-orders">
        <h1> Registrar nova Ordem de Serviço</h1>
        <FormGroup>
          <Label>
            Descrição:
          </Label>
          <Input
            type="text"
            id="titulo"
            placeholder="Atividade a ser realizada."
            value={descricao}
            onChange={({ target }) => setDescricao(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Data:
          </Label>
          <Input
            type="date"
            id="data"
            value={data}
            onChange={({ target }) => setData(target.value)}
          />
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Id do Cliente:
              </Label>
              <Input
                type="number"
                id="idCliente"
                placeholder="0"
                value={idCliente}
                onChange={({ target }) => setIdCliente(target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                Id da pessoa colaboradora:
              </Label>
              <Input
                type="text"
                id="idColaborador"
                placeholder="0"
                value={idColaborador}
                onChange={({ target }) => setIdColaborador(target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          type="submit"
          className="button-register"
          onClick={(e) => handleSubmit(e)}
        >
          Registrar
        </Button>
      </Form>
    </div>
  )
}

export default Orders;