import React from 'react';
import { useState } from 'react';
import {
  Label,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

function Client() {

  const [nome, setNome] = useState("");

  return (
    <div>
      <Form>
        <h1>Cadastro de Cliente</h1>
        <FormGroup>
          <Label>
            Nome:
          </Label>
          <Input
            type="text"
            id="nome"
            placeholder="Nome da pessoa cliente."
            value={nome}
            onChange={({ target }) => setNome(target.value)}
          />
        </FormGroup>
        <Button
          type="submit"
          color="primary"
        >
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Client;