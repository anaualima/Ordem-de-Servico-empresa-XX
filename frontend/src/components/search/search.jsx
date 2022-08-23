import React, { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import Orders from '../orders/Orders';
import './search.css';
import {
  Col,
  Row,
  Label,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";


function Search() {

  const [clientId, setClientId] = useState("");
  const [collaboratorId, setCollaboratorId] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getClient = async () => {
    const response = await fetchAPI('get', `http://localhost:3001/client/${id}`);
    console.log(response);
    return response;
  };

  const getCollaborator = async () => {
    const response = await fetchAPI('get', `http://localhost:3001/collaborator/${id}`);
    console.log(response);
    return response;
  };

  const getDate = async () => {
    const response = await fetchAPI('get', `http://localhost:3001/collaborator/search?data=${data}`);
    console.log(response);
    return response;
  };

  const handleNavegate = (e) => {
    e.preventDefault();
    setIsOpen(true)
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (clientId !== "") {
      setId(clientId)
      getClient();
    } else if (collaboratorId !== "") {
      setId(collaboratorId)
      getCollaborator();
    } else {
      getDate();
    }
  }

  const toggleTask = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      <Orders isOpen={isOpen} toggle={toggleTask} />
      <Button
        type="submit"
        className="button-cadaster-order"
        size="lg"
        onClick={(e) => handleNavegate(e)}
      >
        CADASTRAR ORDEM DE SERVIÇO
      </Button>
      <Form className="container-search">
        <h3>Pesquisar O.S</h3>
        <Row>
          <Col>
            <FormGroup>
              <Label
                htmlFor="client"
              >
                Id do cliente:
              </Label>
              <Input
                type="number"
                id="client"
                placeholder="0"
                value={clientId}
                onChange={({ target }) => setClientId(target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label
                htmlFor="collaborator"
              >
                Id do colaborador:
              </Label>
              <Input
                type="number"
                id="collaborator"
                placeholder="0"
                value={collaboratorId}
                onChange={({ target }) => setCollaboratorId(target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label
                htmlFor="data"
              >
                Data:
              </Label>
              <Input
                type="date"
                id="data"
                value={data}
                onChange={({ target }) => setData(target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <Button
              type="submit"
              className="button-search"
              onClick={(e) => handleSearch(e)}
              size="lg"
            >
              <i className="uil uil-search"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </div >
  )
}

export default Search;