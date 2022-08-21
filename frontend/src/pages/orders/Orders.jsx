import React from 'react';
import { useState } from 'react';
import {
  Col,
  Row,
  Label,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

function Orders() {

  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idColaborador, setIdColaborador] = useState("");

  return (
    <div>
      <Form>
        <FormGroup>
          <Row>
            <Col>
              <Button
                outline
              >
                Cadastrar cliente
              </Button>
            </Col>
            <Col>
              <Button
                outline
              >
                Cadastrar colaborador
              </Button>
            </Col>
          </Row>
          <h1> Registrar nova Ordem de Serviço</h1>
          <Label>
            Descrição:
          </Label>
          <Input
            type="text"
            id="titulo"
            placeholder="Descreva aqui o probelma relatado pelo cliente."
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
          color="primary"
        >
          Registrar
        </Button>
      </Form>
    </div>
  )
}

export default Orders;