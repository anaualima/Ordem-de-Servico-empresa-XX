import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Client from './pages/client/Client';
import Collaborator from './pages/collaborator/Collaborator';
import ListOrders from './pages/listOrders/ListOrders';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/client" element={<Client />} />
        <Route path="/collaborator" element={<Collaborator />} />
        <Route path="/list" element={<ListOrders />} />
      </Routes>
    </div>
  );
}

export default App;
