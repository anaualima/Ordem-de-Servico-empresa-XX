import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Client from './pages/client/Client';
import Collaborator from './pages/collaborator/Collaborator';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/client" element={<Client />} />
        <Route path="/collaborator" element={<Collaborator />} />
      </Routes>
    </div>
  );
}

export default App;
