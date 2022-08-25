import React, { useEffect } from 'react';
import { useState } from 'react';
import fetchAPI from '../../services/fetchApi';
import { Table, Button } from "reactstrap";
import Search from '../../components/search/search';
import './listOrders.css';
import { useContext } from 'react';
import Context from '../../context/Context';

function ListOrders() {

  const [orders, setOrders] = useState([]);
  const { state } = useContext(Context);

  const getApi = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await fetchAPI('get', 'http://localhost:3001/order', {}, { Authorization: user.token });
    return response;
  };

  const atualizer = async () => {
    await getApi().then((response) => setOrders(response));
  }

  useEffect(() => {
    getApi().then((response) => {
      if (Array.isArray(response)) {
        setOrders(response);
      }
    })
  }, [orders]);

  useEffect(() => {
    if (state.data?.length) {
      setOrders(state.data);
    }
  }, [state]);

  const handleDelete = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    await fetchAPI('delete', `http://localhost:3001/order/${id}`, {}, { Authorization: user.token });
    atualizer();
  }


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
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.data.replace('00:00:00', '').split('-').reverse().join('/')}</td>
              <td>{o.descricao}</td>
              <td>{o.clientId}</td>
              <td>{o.collaboratorId}</td>
              <td>
                <Button
                  type="button"
                  id={o.id}
                  className="button-delete"
                  onClick={() => handleDelete(o.id)}
                >
                  <i className="uil uil-multiply"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListOrders;