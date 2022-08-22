import React, { useEffect } from 'react';
import { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import { Table } from "reactstrap";
import Search from '../../components/search/search';
import './listOrders.css'

function ListOrders() {

  const [orders, setOrders] = useState([]);

  const getApi = async () => {
    const response = await fetchAPI('get', 'http://localhost:3001/order');
    console.log(response);
    return response;
  };

  useEffect(() => {
    getApi().then((response) => setOrders(response));
  }, []);

  return (
    <div className="container-list">
      <Search />
      <Table striped>
        <thead>
          <tr>
            <th>data</th>
            <th>descrição</th>
            <th>Id do cliente</th>
            <th>Id do colaborador</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.data}</td>
              <td>{o.descricao}</td>
              <td>{o.clientId}</td>
              <td>{o.collaboratorId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListOrders;