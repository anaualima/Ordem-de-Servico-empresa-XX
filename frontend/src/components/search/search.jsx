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
import { useContext } from 'react';
import Context from '../../context/Context';


function Search() {

  const [clientId, setClientId] = useState("");
  const [collaboratorId, setCollaboratorId] = useState("");
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { setState } = useContext(Context);

  const getOsClient = async (clientId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetchAPI('get', `http://localhost:3001/order/client/${clientId}`, {}, { Authorization: user.token });
    return response;
  };

  const getOsCollaborator = async (collaboratorId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetchAPI('get', `http://localhost:3001/order/collaborator/${collaboratorId}`, {}, { Authorization: user.token });
    return response;
  };

  // const getDate = async () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const response = await fetchAPI('get', `http://localhost:3001/collaborator/search?data=${data}`, {}, { Authorization: user.token });
  //   return response;
  // };

  const getApi = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetchAPI('get', 'http://localhost:3001/order', {}, { Authorization: user.token });
    return response;
  };

  const handleNavegate = (e) => {
    e.preventDefault();
    setIsOpen(true)
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (clientId !== "") {
      setState(await getOsClient(clientId));
    } else if (collaboratorId !== "") {
      setState(await getOsCollaborator(collaboratorId));
    } else {
      setState({ data: await getApi() });
    }
  }

  const toggleTask = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="container-new-os">
        <h1>Lista de Ordens de Serviço</h1>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <Orders isOpen={isOpen} toggle={toggleTask} />
        <Button
          type="submit"
          className="button-cadaster-order"
          size="lg"
          onClick={(e) => handleNavegate(e)}
        >
          <i className="uil uil-plus-square"></i>
          <p>Nova O.S</p>
        </Button>
      </div>
      <Form className="container-search">
        <h5>Pesquisar O.S</h5>
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
                Por período:
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