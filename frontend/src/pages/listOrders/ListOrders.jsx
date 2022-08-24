import React, { useEffect } from 'react';
import { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import { Table } from "reactstrap";
import Search from '../../components/search/search';
import './listOrders.css';

function ListOrders() {

  const [orders, setOrders] = useState([]);

  const getApi = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetchAPI('get', 'http://localhost:3001/order', {}, { Authorization: user.token });
    return response;
  };

  useEffect(() => {
    getApi().then((response) => {
      if (Array.isArray(response)) {
        setOrders(response);
      }
    })
  }, [orders]);

  return (
    <div className="container-list">
      <Search />
      <Table striped bordered className='table-list'>
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
              <td>{o.data.replace('00:00:00', '').split('-').reverse().join('/')}</td>
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