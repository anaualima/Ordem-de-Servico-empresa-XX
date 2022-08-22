import React, { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
// import Orders from '../orders/Orders';
import './search.css';
import {
  Col,
  Label,
  Form,
  Input,
  Button,
  FormGroup,
  Row,
} from "reactstrap";


function Search() {

  const [clientId, setClientId] = useState("");
  const [collaboratorId, setCollaboratorId] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  // const [isOpen, setIsOpen] = useState(false);

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
    // setIsOpen(true)
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

  // const toggleTask = () => {
  //   setIsOpen(false);
  // }

  return (
    <div className="container-search">
      {/* <Orders isOpen={isOpen} toggle={toggleTask} /> */}
      <Form>
        <Col>
          <Button
            type="submit"
            className="button-search"
            onClick={(e) => handleNavegate(e)}
          >
            CADASTRAR NOVA TAREFA
          </Button>
        </Col>


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
                value={collaboratorId}
                onChange={({ target }) => setCollaboratorId(target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
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
        <Button
          type="submit"
          size="lg"
          className="button-search"
          onClick={(e) => handleSearch(e)}
        >
          Buscar
        </Button>
      </Form>
    </div >
  )
}

export default Search;