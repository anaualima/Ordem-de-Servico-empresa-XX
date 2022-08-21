import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Orders from './pages/orders/Orders';
// import Tasks from './pages/tasks/Tasks';
// import TaskList from './pages/tasklist/TaskList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
